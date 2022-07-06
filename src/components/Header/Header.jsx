import React, { useState } from "react";
import HeaderStyles from "./header.module.css";
import { FiArrowUpCircle } from "react-icons/fi";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 70) {
      setSticky(true);
    }
    if (window.scrollY < 70) {
      setSticky(false);
    }
    if (window.scrollY > 500) {
      setScrollUp(true);
    }
    if (window.scrollY < 500) {
      setScrollUp(false);
    }
  };

  return (
    <>
      {scrollUp ? (
        <FiArrowUpCircle
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          size={40}
          className={HeaderStyles.scrollup}
        />
      ) : null}
      <header
        className={`${HeaderStyles.header} ${
          sticky ? HeaderStyles.sticky : ""
        }`}
      >
        <h1>VUEEXE.<span style={{ color: "black" }}>CO</span></h1>
        <ul>
          <li>
            <a href="#products">PRODUCTS</a>
          </li>
          <li>
            <a href="#features">FEATURES</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
