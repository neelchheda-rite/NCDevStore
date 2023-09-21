import "./Footer.scss";
import React from "react";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptatum illo incidunt provident perspiciatis suscipit consectetur
            quasi odit mollitia odio voluptatem cumque architecto consequatur
            nesciunt dolores.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Jethalal Champaklal Gada</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">+911234567891</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">gadaelectronics@mail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">GADA ELECTRONICS 2023 CREATED BY TAPPU</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
