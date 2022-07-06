import React from "react";
import ProductsStyles from "./products.module.css";
import ImageVariation1 from "../../assets/variation1.png";
import ImageVariation2 from "../../assets/variation2.png";

const Products = () => {
  return (
    <div id="products" className={`container-fluid ${ProductsStyles.products}`}>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">OUR PRODUCTS</h2>
        <div className={`row border align-items-center ${ProductsStyles.bglightgrey}`}>
          <div className="col-md-4 p-4">
              <img src={ImageVariation1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 p-4">
            <h3>Bamboo Soap Dish</h3>
            <p>The bar soap holder is hard and durable enough due to high quality bamboo wood material. Made of high-quality bamboo wood with sleek surface, which can be cleaned easily by water. Clean up water in every few days to keep longer using span.</p>
            <a href="">Buy Now</a>
          </div>
        </div>
        <div className={`row border mt-3 align-items-center ${ProductsStyles.bglightgrey}`}>
          <div className="col-md-4 p-4">
              <img src={ImageVariation2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 p-4">
            <h3>Wooden Soap Dish</h3>
            <p>The natural wood soap holder material brings a natural feeling to your home cleaning activities and equipped with non slip pads to prevent slipping and lets water drain down to the bottom to keep bar soap away from being soggy and mushy.</p>
            <a href="">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
