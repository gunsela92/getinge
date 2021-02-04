import React from "react";

const Mainblock = () => {
  return (
    <div className="mainBlock">
      <div className="With-passion-for-the">
        With passion for
        <span className="text-style-1"> the future</span>
        <div className="We-focus-on-contamin">
          We focus on contamination prevention and upstream bioprocessing to
          provide tailored, efficient and compliant solutions.
        </div>
      </div>
      <div className="hero">
      <div className="mainInfo">
        <div className="weather">
          <div className="weatherIcon"></div>
          <p>
            Antalya Hava Durumu
            <br />
            <span style={{ fontSize: "22px" }}>
              22°
              <label style={{ fontSize: "14px", color: "#6c7b87" }}>
                {" "}
                - Parçalı Bulutlu
              </label>
            </span>
          </p>
          </div>
          <hr />
          <div className="workers">
            <div className="workerIcon"></div>
            <p>Getinge Toplam Çalışan Sayısı<br/>
            <span style={{ fontSize: "22px" }}>1360 kişi</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mainblock;
