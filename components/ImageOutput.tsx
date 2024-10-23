import React from "react";
import Loading from "./Loading";
import Image from "next/image";

type Props = {
  image: string;
  isLoading: boolean;
};

const ImageOutput = ({ image, isLoading }: Props) => {
  return (
    <div className="m-8 bg-[#E8E8E8] rounded-xl flex justify-center items-center">
      {image.length > 0 && (
        <div className="flex flex-col items-center">
          <Image
            src={image}
            alt={`Generált színező.`}
            width={450}
            height={450}
            className="rounded-xl shadow-sm border-[1px] border-[#E8E8E8]"
          />
          <a
            href={image}
            download={`generalt_szinezo.png`}
            target="_blank"
            className="my-4 bg-[#2D8D79] hover:bg-[#246A5E] text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Letöltés
          </a>
        </div>
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default ImageOutput;
