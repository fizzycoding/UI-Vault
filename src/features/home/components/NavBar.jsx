import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function NavBar() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Apply theme based on isDarkModeOn state
  useEffect(() => {
    if (isDarkModeOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkModeOn]);

  return (
    <nav className="shadow-sm bg-[#fafafa] shadow-zinc-200 p-3 flex w-full justify-center  dark:shadow-gray-700 dark:bg-black">
      <div className="max-w-6xl flex justify-between w-full">
        <div className=" sm:text-xl font-extrabold font-segoeBold ">
          <span className="text-primary ">UI </span>
          <span className="text-texts dark:text-texts-dark">Vault</span>
        </div>
        <div className="flex  gap-4 justify-center items-center">
          <SearchBar />

          <div
            onClick={() => setIsDarkModeOn(!isDarkModeOn)}
            className="hover:bg-zinc-100 dark:hover:bg-dark-light30 rounded-md cursor-pointer p-1.5"
          >
            {isDarkModeOn ? (
              <MdOutlineLightMode className="sm:text-lg cursor-pointer text-yellow-400" />
            ) : (
              <MdOutlineDarkMode className="sm:text-lg cursor-pointer text-gray-800" />
            )}
          </div>
          <div className="hover:bg-zinc-100 dark:hover:bg-dark-light30 rounded-md cursor-pointer p-1.5">
            <FaDiscord className="sm:text-lg text-texts dark:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
