import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Menu from "./Menu";
import ThemeContext from "@/contexts/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <main
          className={`${
            theme === "light"
              ? "bg-[#F0F0F0] min-h-screen flex"
              : "bg-[#241d1d] min-h-screen flex"
          }`}
        >
          <ThemeSwitch setTheme={setTheme} />
          <Menu />
          {children}
        </main>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
