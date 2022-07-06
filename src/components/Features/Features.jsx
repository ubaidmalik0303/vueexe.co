import React from "react";
import FeaturesStyles from "./features.module.css";
import FeatureImage1 from "../../assets/feature1.jpg";
import FeatureImage2 from "../../assets/feature2.jpg";
import FeatureImage3 from "../../assets/feature3.jpg";
import FeatureImage4 from "../../assets/feature4.jpg";

const Features = () => {
  return (
    <div id="features" className={`container-fluid ${FeaturesStyles.features}`}>
      <div className="container">
        <hr className="my-5" />
        <h2>Features</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 p-4">
            <div className={`${FeaturesStyles.featurecard}`}>
              <img src={FeatureImage1} alt="" />
              <h4 className="m-3">Waterproof</h4>
              <p className="m-3">
                The bar soap holder is hard and durable enough due to high
                quality wood and bamboo material. The natural wood soap holder material
                brings a natural feeling to your home cleaning activities{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4">
            <div className={`${FeaturesStyles.featurecard}`}>
              <img src={FeatureImage3} alt="" />
              <h4 className="m-3">Slotted Design</h4>
              <p className="m-3">
                The soap dish is designed with self-draining inclined sink. It
                drains very well, soap dry quickly, so that it prevents soap
                melting and extends soap life.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4">
            <div className={`${FeaturesStyles.featurecard}`}>
              <img src={FeatureImage2} alt="" />
              <h4 className="m-3">Non-Slip and Waterproof</h4>
              <p className="m-3">
                Equipped with non slip pads to prevent slipping and lets water
                drain down to the bottom to keep bar soap away from being soggy
                and mushy{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4">
            <div className={`${FeaturesStyles.featurecard}`}>
              <img src={FeatureImage4} alt="" />
              <h4 className="m-3">Easy To Clean</h4>
              <p className="m-3">
                Made of high quality wood adn bamboo with sleek surface, which
                can be cleaned easily by water. Clean up water in every few days
                to keep longer using span{" "}
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5" />
      </div>
    </div>
  );
};

export default Features;
