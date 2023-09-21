import "./Header.scss";
// eslint-disable-next-line
import { useEffect, useState, useContext } from "react";
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
// eslint-disable-next-line
import { Search } from "./Search/Search";
// eslint-disable-next-line
import { Cart } from "../Cart/Cart";
// eslint-disable-next-line
import { Context } from "../../utils/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) setScrolled(true);
    else setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  },[]);
  return (
    <header className={`main-header ${scrolled? 'sticky-header':''}`}>
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
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
