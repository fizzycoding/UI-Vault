import React from "react";
import { Link, useLocation } from "react-router-dom";

function Items({ title, id }) {
  const location = useLocation();
  const isSelected = location.pathname === `/${id}`;

  return (
    <Link
      to={`/${id}`}
      className={`cursor-pointer transition-all ease-in duration-100 font-medium p-1 px-3 rounded-full flex justify-center items-center
      ${
        isSelected
          ? "bg-primary text-white"
          : "text-texts-light60 dark:hover:text-texts-light90 hover:text-texts-light10"
      }
      `}
    >
      <span className="text-nowrap font-sans text-sm">{title}</span>
    </Link>
  );
}

export default Items;
