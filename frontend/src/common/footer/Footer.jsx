import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="Footer__wrapper">
        <div className="mi_page_container">
          <div className="Footer__space">
            <p className="Footer__body_fs">Copyright © Airline Portal</p>
            <p className="Footer__body_fs">@2023</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
