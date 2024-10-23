import React, { useContext } from "react";
import Image from "next/image";

import Image1 from "../assets/free-images/tunder-kiralyfi.png";
import Image2 from "../assets/free-images/tunder-szorny.png";
import Image3 from "../assets/free-images/juhasz-csorda.png";
import Image4 from "../assets/free-images/buburekfujo.png";
import Image5 from "../assets/free-images/sarkany-lovag.png";
import Image6 from "../assets/free-images/kiscicak-urhajo.png";
import Image7 from "../assets/free-images/felhokarcolo.png";
import Image8 from "../assets/free-images/ogre-felhokarcolo.png";
import ThemeContext from "@/contexts/theme";

const FreeImages = () => {
  const theme = useContext(ThemeContext);
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  return (
    <div
      className={`
      ${
        theme === "light"
          ? "bg-white border-[#E8E8E8]"
          : "bg-inherit border-[#2D8D79]"
      }
     h-full rounded-xl border mx-7 my-8 px-4 py-8`}
    >
      <h1
        className={`
        ${theme === "light" ? "text-black" : "text-white"}
        text-4xl font-extrabold text-center mb-10 shadow-text`}
      >
        Színezők, amik csak rád várnak!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className={`
              ${
                theme === "light"
                  ? "bg-white border-[#E8E8E8]"
                  : "bg-inherit border-[#2D8D79]"
              }
              flex flex-col items-center p-4 rounded-xl shadow-sm border`}
          >
            <Image
              src={img}
              alt={`Ingyenes színező ${index + 1}`}
              width={256}
              height={256}
              className="rounded-lg shadow-md"
            />
            <a
              href={img.src}
              download={`ingyenes_szinezo_${index + 1}.png`}
              className="mt-4 bg-gradient-to-r bg-[#2D8D79] hover:bg-[#246A5E] text-white font-bold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition duration-300"
            >
              Letöltés
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeImages;
