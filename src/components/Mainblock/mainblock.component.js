import React from "react";
import hero from "../../assets/img/hero.png";

const Mainblock = () => {
  return (
    <div className="mainBlock">
      <div className="With-passion-for-the">
        With passion for
        <span className=".text-style-1"> the future</span>
      </div>
      <div>
      <img
        src={hero}
        srcset="../../assets/img/hero@2x.png 2x,
     ../../assets/img/hero@3x.png 3x"
        className="hero"
        alt=""
      />
    </div></div>
  );
};

export default Mainblock;
