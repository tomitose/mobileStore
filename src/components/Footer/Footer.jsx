import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="data-text">Company: MOBILE STORE</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm botom-text">
            &copy;{new Date().getFullYear()} | All rights reserved | Terms Of
            Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
