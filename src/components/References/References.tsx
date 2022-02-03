import React from "react";

import "./References.css";

import amazon from "../../../src/amazon.jpg";
import youtube from "../../../src/youtube.png";

const References = () => {
  return (
    <div className="referencesContainer">
      <h1>REFERENCES</h1>

      <div className="references">
        <img src={youtube} alt="" />
        <img src={youtube} alt="" />
        <img src={youtube} alt="" />
        <img src={youtube} alt="" />
      </div>

      <div className="references">
        <img src={youtube} alt="" />
        <img src={youtube} alt="" />
        <img src={youtube} alt="" />
        <img src={youtube} alt="" />
      </div>

      <footer className="aboutMeFooter">
        07/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default References;
