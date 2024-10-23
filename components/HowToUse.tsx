import React from "react";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme";

type CustomLiType = {
  index: string;
  text: string;
};

const CustomLi = ({ index, text }: CustomLiType) => {
  const theme = useContext(ThemeContext);

  return (
    <li className="flex items-center gap-2">
      <span
        className={`${
          theme === "light" ? "text-[#374151]" : "text-[#2D8D79]"
        } text-[20px] font-bold`}
      >
        {index}.
      </span>
      {text}
    </li>
  );
};

const HowToUse = () => {
  const theme = useContext(ThemeContext);

  const texts = [
    "Add meg a célközönség életkorát.",
    "Válaszd ki a színező részletességi szintjét (Könnyű, Közepes, Nehéz).",
    "Írd le részletesen, mit szeretnél látni a képen.",
    "Kattints a Generál gombra a színezők elkészítéséhez.",
    "Várj türelemmel, amíg a képek elkészülnek.",
    "Válaszd ki a neked tetsző színezőt a megjelenített opciók közül.",
    "Töltsd le a kiválasztott képet és kezdj el színezni!",
  ];

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl text-center font-bold text-[#2D8D79] mb-4">
        Hogyan készíts színezőt?
      </h2>
      <ul
        className={`${
          theme === "light" ? "text-[#374151]" : "text-[#ededed]"
        } text-[18px] space-y-2`}
      >
        {texts.map((t, i) => (
          <CustomLi key={i + 1} index={(i + 1).toString()} text={t} />
        ))}
      </ul>
    </div>
  );
};

export default HowToUse;
