import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { atomOneDark,atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function GetCode({ onClose, codes }) {
  const [selectedTab, setSelectedTab] = useState("html");
  const [codeInfo, setCodeInfo] = useState(codes[selectedTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeInfo.code);
    alert("Code copied to clipboard!");
  };

  const style = localStorage.getItem("theme") === "dark" ? atomOneDark : atomOneLight

  return (
    <div className="fixed inset-0 bg-black py-20 bg-opacity-50 flex justify-center items-center z-30">
      {/* Modal card */}
      <div className="dark:bg-dark-light10 bg-white w-11/12 h-full sm:w-3/4 lg:w-1/2 p-2 sm:p-5 rounded-lg shadow-lg flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b dark:border-dark-light50 pb-3 mb-4">
          <div className="flex gap-2 sm:gap-4 overflow-x-scroll scrollbar-hide">
            {Object.keys(codes).map((code) => (
              <button
                key={code}
                onClick={() => {
                  setCodeInfo(codes[code]);
                  setSelectedTab(code);
                }}
                className={`px-4 py-1 max-sm:text-sm rounded-md font-medium ${
                  selectedTab === code
                    ? "bg-primary text-white"
                    : "text-texts-light40 dark:text-texts-light80"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Close Button  */}
          <IoCloseCircleOutline
            className="cursor-pointer ml-2 text-xl text-red-500 hover:text-red-700"
            onClick={onClose}
          />
        </div>

        {/* Code display section */}
        <div className=" bg-gray-100 dark:bg-dark/10 scrollbar-hide relative rounded-lg border dark:border-dark-light50 mb-4 h-full overflow-scroll">
          <div className="h-full overflow-scroll">
            <SyntaxHighlighter
              style={style}
              customStyle={{
                backgroundColor: "transparent",
                padding: "1.25rem",
                border: "none",
                outline: "none",
                height: "100%",
                fontSize: "0.8rem",
                overflow: "auto", // Enable scrolling
              }}
              wrapLongLines={true}
              language={codeInfo?.type}
            >
              {codeInfo.code}
            </SyntaxHighlighter>

            <style jsx>{`
              ::-webkit-scrollbar {
                display: none; /* Hides the scrollbar for WebKit-based browsers */
              }
              .code-container {
                scrollbar-width: none; /* Hides the scrollbar for Firefox */
              }
            `}</style>
          </div>
          <div
            onClick={handleCopy}
            className="flex cursor-pointer hover:bg-gray-50  dark:bg-dark-light10 dark:text-texts-dark bg-white px-2 rounded py-0.5 text-xs justify-center items-center absolute z-50 top-2 right-2"
          >
            <FaRegCopy />
            <span className="ml-1 ">Copy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCode;
