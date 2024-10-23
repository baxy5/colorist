import React from "react";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme";

const Hero = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="text-center pt-20 px-4">
      <h1
        className={`
        ${theme === "light" ? "text-black" : "text-white"}
        text-5xl font-extrabold mb-6 `}
      >
        Készíts színezőket a <span className="text-[#2D8D79]">te </span>
        fantáziád alapján!
      </h1>
      <p
        className={`
        ${theme === "light" ? "text-gray-600" : "text-white"}
        text-xl mb-8`}
      >
        Egyedi színezők, amelyek életre keltik a fantáziádat - egy kattintásra
      </p>
    </div>
  );
};

export default Hero;
