import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="content-left">
          <a href="" className="text-[tomato] text-[40px]">BuyUp</a>
          <p className="mt-2 text-[16px] leading-6">
            Lorem Ipsium is simply dummy text of the of the printing and
            typesetting. when an unknown printer a gallery of type and scrambled
            it to make a type of specimen book.
          </p>
          <div className="social-icon">
            <a href="" className="fab fa-instagram"></a>
            <a href="" className="fab fa-facebook"></a>
            <a href="" className="fab fa-twitter"></a>
            <a href="" className="fab fa-youtube"></a>
          </div>
        </div>
        <div className="content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234-904-666-0706</li>
            <li>emmywiser3@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p className=" leading-7 text-[15px]">Copyright 2024 &#169; BuyUp.com - All Right Reserved.</p>
        <span className="text-[14px]">Crafted with <span className="text-[tomato] text-[18px]">♥</span> by emmyCode</span>
      </div>
    </div>
  );
};

export default Footer;
