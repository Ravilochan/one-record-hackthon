import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="Banner__wrapper">
        <div className="mi_page_container">
          <div className="Banner__space">
            <div className="Banner__title">
              <i class="bx bx-arrow-back"></i>
              <h1 className="Banner__title_fs">Shipment Info</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
