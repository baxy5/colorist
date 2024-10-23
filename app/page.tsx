"use client";

import { useContext, useMemo, useState } from "react";
import { openai } from "@/utils/openai";

import { FreeImages, Hero, ImageOutput, InputForm } from "@/components";
import Layout from "@/components/Layout";
import ThemeContext from "@/contexts/theme";

// TODO: add subscription payment

// TODO: fine tune image
// TODO: add analytics
export default function Home() {
  const theme = useContext(ThemeContext);

  const [image, setImage] = useState<string>("");

  const [formState, setFormState] = useState<{
    age: string;
    diff: string;
    prompt: string;
  }>({
    age: "",
    diff: "kevésbé",
    prompt: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isDisabled = useMemo(() => {
    return !(formState.diff && formState.age && formState.prompt);
  }, [formState.diff, formState.age, formState.prompt]);

  async function generateImages() {
    setError(null);
    try {
      setIsLoading(true);
      setFormState((prevState) => ({
        ...prevState,
        age: "",
        diff: "kevésbé",
        prompt: "",
      }));
      const basePrompt =
        "Készíts egy színezőt, amely megfelel a következő leírásnak:";
      const userPrompt = `A színező ${formState.age} éveseknek készüljön, ${formState.diff} legyen, és a következő leírás alapján készüljön: ${formState.prompt}`;
      const conditions = [
        "Teljesen fekete-fehér, színes részek nélkül.",
        "Nincs háttér.",
        "Kontúrvázlat.",
        "Színezésre tervezve.",
        "Egyszerű vonalrajz.",
        "Semmi ne legyen kitöltve színnel.",
        "A háttér színe mindig fehér és a vonalak feketék.",
        "Csak a fenti leírás alapján készüljön.",
        "Ne tartalmazzon szöveget vagy szövegdobozokat.",
        "Ne tartalmazzon olyan tárgyakat/élőlényeket, amelyek nincsenek megadva a leírásban.",
        "Szigorúan tartsd be a feltételeket, különösen a színekkel kapcsolatban!",
        "Legyél reális! Ne hozz létre felesleges vonalakat.",
        "Ne színezd ki!",
        "Egyszerű stílusú legyen a kép!",
        "Ne legyen részletes!",
      ];

      const fullPrompt = `
      ${basePrompt}\n\n
      ${userPrompt}\n\n
      Feltételek:\n${conditions.map((c) => `- ${c}`).join("\n")}
      Kérlek, készítsd el a színezőt az összes feltétel betartásával.
      `;

      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: fullPrompt,
      });

      const imageUrl = response.data[0]?.url;
      if (!imageUrl) {
        throw new Error("Nem sikerült 3 képet generálni");
      }

      setImage(imageUrl);
    } catch (error) {
      console.error("Hiba történt a kép generálása során:", error);
      setError("Hiba történt a kép generálása során. Próbáld újra.");
      setIsLoading(false);

      setFormState((prevState) => ({
        ...prevState,
        age: "",
        diff: "kevésbé",
        prompt: "",
      }));
    } finally {
      setIsLoading(false);
      setFormState((prevState) => ({
        ...prevState,
        age: "",
        diff: "kevésbé",
        prompt: "",
      }));
    }
  }

  return (
    <Layout>
      <div className="w-5/6">
        <div
          className={`
            ${
              theme === "light"
                ? "bg-white border-[#E8E8E8]"
                : "bg-[#241d1d] border-[#2D8D79]"
            }
             rounded-xl border mx-7 my-8`}
        >
          <Hero />

          <div className="grid grid-cols-2">
            <InputForm
              generateImages={generateImages}
              isDisabled={isDisabled}
              error={error || ""}
              setFormState={setFormState}
            />
            <ImageOutput image={image} isLoading={isLoading} />
          </div>
        </div>

        <div>
          <FreeImages />
        </div>
      </div>
    </Layout>
  );
}
