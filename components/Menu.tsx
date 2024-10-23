import React from "react";
import { HowToUse, Contact } from "@/components";
import { signIn } from "next-auth/react";

const Menu = () => {
  return (
    <div className="w-1/6 sticky top-0 self-start pt-20">
      <div className="ml-8">
        <ul className="py-20 grid gap-2">
          <li className="text-[#241d1d] active:text-white px-2 py-1 active:shadow-md rounded-lg active:bg-[#2d8d7a8c] transition-all ease-in-out duration-200">
            Főoldal
          </li>
          <li className="text-[#241d1d] active:text-white px-2 py-1 active:shadow-md rounded-lg active:bg-[#2d8d7a8c] transition-all ease-in-out duration-200">
            Generálás
          </li>
          <li
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
            className="text-[#241d1d] active:text-white px-2 py-1 active:shadow-md rounded-lg active:bg-[#2d8d7a8c] transition-all ease-in-out duration-200"
          >
            Bejelentkezés
          </li>
        </ul>
        {/* <HowToUse /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Menu;
