import React, { Dispatch, SetStateAction, useContext } from "react";
import ErrorDialog from "./ErrorDialog";
import ThemeContext from "@/contexts/theme";

type Props = {
  generateImages: () => void;
  isDisabled: boolean;
  error: string;
  setFormState: Dispatch<
    SetStateAction<{ age: string; diff: string; prompt: string }>
  >;
};

const CustomSpan = ({ text }: { text: string }) => {
  const theme = useContext(ThemeContext);

  return (
    <span
      className={`
  ${theme === "light" ? "text-[#4B5563]" : "text-[#2D8D79]"}
  mb-2 font-bold`}
    >
      {text}
    </span>
  );
};

const CustomOption = ({ value, text }: { value: string; text: string }) => {
  const theme = useContext(ThemeContext);

  return (
    <option
      value={value}
      className={`${theme === "light" ? "" : "bg-[#2D8D79]"}`}
    >
      {text}
    </option>
  );
};

const InputForm = ({
  generateImages,
  isDisabled,
  error,
  setFormState,
}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-col gap-6 p-8">
      <label className="flex flex-col">
        <CustomSpan text="Életkor:" />
        <input
          type="text"
          placeholder="7"
          className={`
            ${
              theme === "light"
                ? "border-[#A3E4D7]"
                : "bg-inherit border-[#2D8D79] text-white"
            }
            border rounded-md p-3 outline-none focus:ring-2 focus:ring-[#2D8D79] transition duration-300`}
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              age: e.target.value,
            }))
          }
        />
      </label>

      <label className="flex flex-col">
        <CustomSpan text="Részletesség:" />
        <select
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              diff: e.target.value,
            }))
          }
          className={`
            ${
              theme === "light"
                ? "border-[#A3E4D7]"
                : "bg-inherit border-[#2D8D79] text-white"
            }
            border rounded-md p-3 outline-none focus:ring-2 focus:ring-[#2D8D79] transition duration-300`}
        >
          <CustomOption value="egyszerűbb" text="Könnyű" />
          <CustomOption value="kiegyensúlyozott" text="Közepes" />
          <CustomOption value="részletes" text="Nehéz" />
        </select>
      </label>

      <label className="flex flex-col">
        <CustomSpan text="Mi legyen a képen?" />
        <textarea
          placeholder="Egy királyfi, egy tündér és egy szörny."
          className={`${
            theme === "light"
              ? "border-[#A3E4D7]"
              : "bg-inherit border-[#2D8D79] text-white"
          }
          border rounded-md p-3 h-32 outline-none focus:ring-2 focus:ring-[#2D8D79] transition duration-300
          `}
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              prompt: e.target.value,
            }))
          }
        ></textarea>
      </label>

      <button
        onClick={generateImages}
        disabled={isDisabled}
        className={`${
          isDisabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#2D8D79] hover:bg-[#246A5E]"
        } text-white font-medium py-3 px-6 rounded-md transition duration-300`}
      >
        Generál
      </button>

      {error && <ErrorDialog error={error} />}
    </div>
  );
};

export default InputForm;
