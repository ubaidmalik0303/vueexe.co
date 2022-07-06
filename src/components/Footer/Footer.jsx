import React from "react";
import FooterStyles from "./footer.module.css";

const Footer = () => {
  return <footer className={`container-fluid ${FooterStyles.footer}`}>
    <div className="container pb-3">
        <hr className="my-4" />
        <span className="text-center">VUEEXE.CO © 2022. All Rights Reserved. Designed By Ubaid Malik</span>
    </div>
  </footer>;
};

export default Footer;
