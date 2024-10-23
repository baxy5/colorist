import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme";

const Contact = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useContext(ThemeContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });
      setFeedback("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`
        ${
          theme === "light"
            ? "bg-white border border-[#E8E8E8]"
            : "bg-inherit border border-[#2D8D79]"
        }
    max-w-2xl mx-auto mt-20 p-6 rounded-xl shadow-sm`}
    >
      <h2 className="text-2xl text-center font-bold text-[#2D8D79] mb-4">
        Értékeld az oldalt
      </h2>
      <p
        className={`
      ${theme === "light" ? "text-gray-600" : "text-white"}
        text-xl mb-8 text-center`}
      >
        Oszd meg velünk a gondolataidat!
      </p>
      <form className="space-y-4" method="post" onSubmit={handleSubmit}>
        <textarea
          id="feedback"
          name="feedback"
          rows={4}
          className={`
            ${
              theme === "light"
                ? "text-gray-700"
                : "bg-inherit border-[#2D8D79] text-white"
            }
            w-full px-3 py-2 resize-none rounded-lg outline-none border focus:ring-2 focus:ring-[#2D8D79] transition duration-300`}
          placeholder="Írd ide az értékelésed..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        {!isLoading && (
          <button
            type="submit"
            className="w-full bg-[#2D8D79] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#246A5E] transition duration-300"
          >
            Küldés
          </button>
        )}
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#2D8D79]"></div>
            <span className="ml-2 text-[#2D8D79] font-semibold">Küldés...</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
