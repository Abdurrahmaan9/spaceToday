import React from "react";

function SideBar(props) {
  const { handleSideDisplayModel } = props;
  return (
    <div className="sidebar">
      <div onClick={handleSideDisplayModel} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleSideDisplayModel}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
