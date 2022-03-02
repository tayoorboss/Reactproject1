/** @format */

import React from "react";
import "./Header.css";
import Backg from "./Images/illustration-hero.svg";

const Header = () => {
  return (
    <div className='Backg'>
      <img className='header' src={Backg} alt='' />
    </div>
  );
};

export default Header;
