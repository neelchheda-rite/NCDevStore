import "./Header.scss";
<<<<<<< HEAD
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import { Search } from "./Search/Search";
import { Cart } from "../Cart/Cart";
import { Context } from "../../utils/context";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="center">GADA ELECTRONICS</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>
                5
            </span>
          </span>
        </div>
      </div>
    </header>
  );
=======
const Header = () => {
    return <div>Header</div>;
>>>>>>> e28b4ee473f97c01b3b3afecd46504bb05bb4f46
};

export default Header;
