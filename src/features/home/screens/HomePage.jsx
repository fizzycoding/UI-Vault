import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Items from "../components/Items";
import GetCode from "../../detailedComponent/screens/GetCode";
import ComponentsWrapper from "../components/ComponentsWrapper";
import { options } from "../utils/groupOptions";
import { Routes, Route, useLocation } from "react-router";
function HomePage() {
  const [filter, setFilter] = useState("");
  const [clickedComponent, setClickedComponent] = useState(null);
  const [getCodeOpened, setGetCodeOpened] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const route = location.pathname.split("/")[1];
    const selectedOption = options.find((option) => option.id === route);
    setFilter(selectedOption ? selectedOption.type : "");
  },[location.pathname]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Nav Bar  */}
      <NavBar />

      {/* Top of hero section  */}
      <div className="w-full flex flex-col items-center max-w-6xl p-2">
        <div className="w-full flex justify-center items-center gap-4 sm:gap-8 flex-col min-h-60 sm:min-h-60 min-md:min-h-80">
          <div className="font-segoeBold text-3xl sm:text-5xl ">
            <span className="text-primary">UI </span>
            <span className="text-texts dark:text-texts-dark">Vault</span>
          </div>
          <span className="sm:text-lg font-medium text-center dark:text-texts-light95 text-texts-light30 max-w-4xl">
            A collection of reusable UI components designed to speed up your
            development process.
          </span>
          <div className="flex justify-center items-center gap-5 flex-wrap">
            <button className="max-sm:text-sm rounded-md shadow-sm shadow-primary bg-primary font-sans font-medium px-5 py-2 text-white">
              Get Started
            </button>
            <button className="max-sm:text-sm rounded-md border shadow-sm  dark:text-texts-light95 border-texts-light80 font-sans font-medium px-5 py-2 text-texts-light30">
              Give a star
            </button>
          </div>
        </div>

        {/* main layout where all the componets will show  */}

        <div className="flex flex-col gap-6 w-full">
          {/* filter wala section  */}
          <div className="flex items-center gap-1 pb-2 sm:gap-3 overflow-x-scroll scrollbar-hide w-full">
            {options.map((option) => (
              <Items key={option.id} title={option.title} id={option.id} />
            ))}
          </div>

          {/* Main mamla pani */}

          <Routes>
            <Route
              path="/"
              element={
                <ComponentsWrapper
                  filter={filter}
                  setGetCodeOpened={setGetCodeOpened}
                  setClickedComponent={setClickedComponent}
                />
              }
            />
            <Route
              path="/:a"
              element={
                <ComponentsWrapper
                  filter={filter}
                  setGetCodeOpened={setGetCodeOpened}
                  setClickedComponent={setClickedComponent}
                />
              }
            />
            <Route
              path="/buttons"
              element={
                <ComponentsWrapper
                  filter={"button"}
                  setGetCodeOpened={setGetCodeOpened}
                  setClickedComponent={setClickedComponent}
                />
              }
            />
          </Routes>
        </div>
      </div>
      {getCodeOpened && (
        <GetCode
          onClose={() => {
            setGetCodeOpened(false);
          }}
          codes={clickedComponent?.codes}
        />
      )}
    </div>
  );
}

export default HomePage;
