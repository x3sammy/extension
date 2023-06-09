import { useState } from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { PagesRoute } from "./routes";
import { Link } from "react-router-dom";

import PrimarySearchAppBar from "./components/navbar";
import FloatingActionButtonSize from "./components/floatingIcon/addIcon";

import LinkContext from "./context/addLink";

function App() {
  const [userLinks, setUserLinks] = useState(() => {
    return [];
  });

  return (
    <div className="App">
      <Router initialEntries={["/"]} initialIndex={0}>
        <LinkContext.Provider value={{ userLinks, setUserLinks }}>
          <div className="">
            <PrimarySearchAppBar />
            <hr />

            <div className="border-2 h-[400px] w-[400px] ml-auto mr-auto relative">
              <div className="absolute bottom-0 right-0 mb-0 mr-1">
                <FloatingActionButtonSize />
              </div>
              <div className="overflow-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 h-[400px]">
                <div className="relative"></div>
                <div className="content-center text-center relative">
                  <PagesRoute />
                </div>
              </div>
            </div>
          </div>
        </LinkContext.Provider>
      </Router>
    </div>
  );
}

export default App;
