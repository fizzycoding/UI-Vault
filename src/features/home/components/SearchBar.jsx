import React from "react";
import { FiSearch } from "react-icons/fi"; // Importing the search icon

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="max-sm:hidden bg-zinc-50 dark:bg-gray-950 py-1 dark:text-white max-sm:dark:text-texts-dark dark:focus:ring-gray-50 dark:ring-gray-700 outline-none placeholder:text-sm text-sm px-2 flex justify-center items-center ring-texts-light80 rounded placeholder:text-texts-light80 ring-1 focus:ring-1 focus:ring-primary pr-7"
      />
      <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 dark:text-white text-texts text-sm sm:text-texts-light80" />
    </div>
  );
}

export default SearchBar;
