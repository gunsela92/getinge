import React from "react";

const Announcements = () => {
  return (
    <div style={{ position: "absolute", bottom: "0", width: "1440px" }}>
      <div className="announcements">
        <p className="Duyurular">
          Duyurular
          <div className="Rectangle-Copy-9">
            <div className="searchIcon"></div>
          </div>
          <div className="genislet">
            <p>Genişlet</p>
            <span className="maximize"></span>
          </div>
        </p>
        <div className="izin">
          <div className="yeni">
            <span>Yeni</span>
          </div>
          <p>
            İzin Duyurusu<div className="arrow"></div>
          </p>
        </div>
        <div className="yemekhane">
          <p>
            Yemekhane Duyurusu<div className="arrow"></div>
          </p>
        </div>
        <div className="ulasim">
          <p>
            Ulaşım Duyurusu<div className="arrow"></div>
          </p>
        </div>
        <div className="sigorta">
          <p>
            Sağlık Sigortası Duyurusu<div className="arrow"></div>
          </p>
        </div>
        <div className="egitim">
          <p>
            Eğitim Duyuruları<div className="arrow"></div>
          </p>
        </div>
        <div className="guvenlik">
          <p>
            İş Yeri Güveliği Duyurusu<div className="arrow"></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
