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
        <a className={VideoBannerStyles.visitstore} href="https://www.amazon.com/VUEEXE-Draining-Bathroom-Kitchen-Natural/dp/B09SK9Y2G5?maas=maas_adg_1E65507AA4C4F0BF3AC60E7F50015A20_afap_abs&ref_=aa_maas&tag=maas">Visit Now</a>
        <a href="#products" className={VideoBannerStyles.scrolldown}>
          <FiArrowDownCircle size={40} />
        </a>
      </div>
    </div>
  );
};

export default VideoBanner;
