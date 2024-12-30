import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>Name of Image</h2>
        <div>
          <p>Description</p>
          <p>contents</p>
        </div>
        <button>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
