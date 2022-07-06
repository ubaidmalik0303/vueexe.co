import React from "react";
import VideoBannerStyles from "./banner.module.css";
import { FiArrowDownCircle } from "react-icons/fi";

const VideoBanner = () => {
  return (
    <div className={VideoBannerStyles.banner}>
      <div>
        <h1>VUEEXE</h1>
        <p>
          Vueexe provides you variety of accessories for your home, kitchen and bathroom in reasonable prices and high quality material.
        </p>
        <button>OUR STORE</button>
        <a href="#products" className={VideoBannerStyles.scrolldown}>
          <FiArrowDownCircle size={40} />
        </a>
      </div>
    </div>
  );
};

export default VideoBanner;
