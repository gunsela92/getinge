import React from "react";

const Center = () => {
  return (
    <div>
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
    </div>
  );
};

export default Center;
