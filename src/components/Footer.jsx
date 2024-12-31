import React from "react";

function Footer(props) {
  const { showModel, handleSideDisplayModel, data } = props;
  return (
    <>
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h1>APOD Project</h1>
          <h2>{data?.title}</h2>
        </div>
        <button onClick={handleSideDisplayModel}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    </>
  );
}

export default Footer;
