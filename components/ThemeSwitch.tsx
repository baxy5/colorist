import React, { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import ThemeContext from "@/contexts/theme";

type Props = {
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const ThemeSwitch = ({ setTheme }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="fixed top-4 left-4 z-10">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`p-2 rounded-full ${
          theme === "light" ? "bg-gray-300" : "bg-gray-700"
        }`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ThemeSwitch;
