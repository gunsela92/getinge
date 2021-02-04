import React from "react";

const Center = () => {
  return (
    <div style={{ position: "absolute", top: "0", width: "1440px" }}>
      <div className="ayinProjesi">
        <p className="projeText">
          Ayın Projesi
          <div className="clip-circle">
            <div className="cup"></div>
          </div>
        </p>
      </div>
      <div className="oneriBox">
        <p className="oneriText">
          Öneri ve İyileştirme
          <div className="clip-circle">
            <div className="info"></div>
          </div>
        </p>
      </div>
      <div className="operationBox">
        <p className="operationText">
          Operasyonel Mükemmellik Uygulamaları
          <div className="clip-circle">
            <div className="set"></div>
          </div>
        </p>
      </div>
      <div className="anketBox">
        <p className="projeText">
          Anketler
          <div className="clip-circle">
            <div className="anketIcon"></div>
          </div>
        </p>
      </div>
      <div className="resultBox">
        <p className="oneriText">
          Anket Sonuçları
          <div className="clip-circle">
            <div className="resultIcon"></div>
          </div>
        </p>
      </div>
      <div className="qrBox">
        <p className="oneriText">
          QR Kod ile Mobile Geç
            <div className="qrImage"></div>
        </p>
      </div>
    </div>
  );
};

export default Center;
