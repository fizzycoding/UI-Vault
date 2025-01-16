import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { useNavigate } from "react-router";
function ComponentCard({
  item,
  children,
  setGetCodeOpened,
  setClickedComponent,
}) {
  const handleGetCodeClick = () => {
    setClickedComponent(item);
    setGetCodeOpened(true);
  };
  return (
    <div className="p-3 border shadow dark:border-gray-800 dark:bg-dark dark:text-texts-light95 border-texts-light95 w-full min-h-40 rounded-lg flex flex-col justify-between">
      <div className="p-5 flex flex-1 w-full justify-center items-center">
        {children}
      </div>
      <div className="flex justify-center dark:text-texts-light70  text-texts-light40 text-sm gap-3 items-center">
        <div
          onClick={() => {
            window.open(item.downloadLink, "_blank");
          }}
          className="cursor-pointer hover:text-primary dark:hover:text-white flex flex-1 gap-1 justify-center items-center"
        >
          <IoMdDownload />
          <span>Download</span>
        </div>
        <span className="text-texts-light90 ">|</span>
        <div
          onClick={handleGetCodeClick}
          className="cursor-pointer hover:text-primary dark:hover:text-white flex gap-1 flex-1 justify-center items-center"
        >
          <FaCode />
          <span className="text-nowrap ">Get code</span>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
