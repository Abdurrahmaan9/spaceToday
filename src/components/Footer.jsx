import React from "react";

function Footer(props) {
  const { showModel, handleSideDisplayModel } = props;
  return (
    <>
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h2>picture title</h2>
          <h1>APOD Project</h1>
        </div>
        <button onClick={handleSideDisplayModel}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    </>
  );
}

export default Footer;
