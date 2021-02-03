import React from "react";
import logo from "../../assets/img/logo.png";
import searchicon from "../../assets/img/icon-search.svg";
import icon from "../../assets/img/icon-sss.png";

const Header = () => {
  return (
      <div className="Rectangle">
        <img
          src={logo}
          srcSet="../../assets/img/logo@2x.png 2x,
     ../../assets/img/logo@3x.png 3x"
          className="Logo"
          alt=""
        />
        <div className="Rectangle-Copy-8">
          <img
            src={searchicon}
            srcSet="../../assets/img/icon-search@2x.png 2x,
        ../../assets/img/icon-search@3x.png 3x"
            className="iconsearch"
            alt=""
          />
          <input
            className="Takip-Numaras-ile-K"
            type="text"
            placeholder={"Takip Numarası İle Kayıt Ara"}
            onChange={(e) => console.log(e.target.value)}
          />
          <button className="Rectangle-Copy-10">
            <label className="Ara">Ara</label>
          </button>
        </div>
        <button className="Rectangle-Copy-14">
          <label className="Sk-Sorulan-Sorular">
            <img
              src={icon}
              srcSet="../../assets/img/icon-sss@2x.png 2x,
        ../../assets/img/icon-sss@3x.png 3x"
              className="iconsss"
              alt=""
            />
            Sık Sorulan Sorular
          </label>
        </button>
    </div>
  );
};

export default Header;
