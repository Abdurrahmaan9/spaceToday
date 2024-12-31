import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSideDisplayModel() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

        // Caching data
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("the Data was fetched from the Cache memory")
        return
      }
      localStorage.clear

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log("Fetched the Data direct from the API");
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data}/>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModel && (
        <SideBar data={data} handleSideDisplayModel={handleSideDisplayModel} />
      )}
      {data && (
        <Footer data={data} handleSideDisplayModel={handleSideDisplayModel} />
      )}
    </>
  );
}

export default App;
