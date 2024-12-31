import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [showModel, setShowModel] = useState(false);

  function handleSideDisplayModel() {
    setShowModel(!showModel);
  }

  return (
    <>
      <Main />
      {showModel && <SideBar handleSideDisplayModel={handleSideDisplayModel} />}
      <Footer handleSideDisplayModel={handleSideDisplayModel} />
    </>
  );
}

export default App;
