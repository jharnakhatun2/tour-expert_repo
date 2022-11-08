import React from "react";
import logo from "../../Assets/logot.png";
import { AiFillFacebook, AiFillHome, AiFillInstagram, AiFillPhone, AiFillTwitterSquare, AiOutlineCheck, AiOutlineMail} from "react-icons/ai";

const Footer = () => {
  return (
    <footer >
    <div className="footer p-5 bg-white  border-t-8 border-t-cyan-400 justify-evenly">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-20 rounded-3xl" />
        <p>
          Cox Bazar Tourist Guide,
          <br />
          Providing reliable, trust<br/>  & safety service  since 2010
        </p>
      </div>
      <div>
        <span className="footer-title text-indigo-700">FOLLOW</span>
        <div className="flex items-center">
        <AiFillFacebook className="text-orange-500"></AiFillFacebook>  <p className="ml-2">Facebook</p>
        </div>
        <div className="flex items-center">
        <AiFillTwitterSquare className="text-orange-500"></AiFillTwitterSquare>  <p className="ml-2">Twitter</p>
        </div>
        <div className="flex items-center">
        <AiFillInstagram className="text-orange-500"></AiFillInstagram>  <p className="ml-2">Instagram</p>
        </div>
      </div>
      <div>
        <span className="footer-title text-indigo-700">TRAVEL SPECIALISTS</span>
        <div className="flex items-center">
        <AiOutlineCheck className="text-orange-500"></AiOutlineCheck>  <p className="ml-2">Vacations As Advertised</p>
        </div>
        <div className="flex items-center">
        <AiOutlineCheck className="text-orange-500"></AiOutlineCheck>  <p className="ml-2">Travel Arrangements</p>
        </div>
        <div className="flex items-center">
        <AiOutlineCheck className="text-orange-500"></AiOutlineCheck>  <p className="ml-2">Handpicked Hotels</p>
        </div>
        <div className="flex items-center">
        <AiOutlineCheck className="text-orange-500"></AiOutlineCheck>  <p className="ml-2">Beach Festivals</p>
        </div>
      </div>
      <div>
        <span className="footer-title text-indigo-700">CONTACT</span>
        <div className="flex items-center">
        <AiOutlineMail className="text-orange-500"></AiOutlineMail>  <p className="ml-2">toureexpart@gmil.com</p>
        </div>
        <div className="flex items-center">
        <AiFillPhone className="text-orange-500"></AiFillPhone>  <p className="ml-2">55-5698-4589</p>
        </div>
        <div className="flex items-center">
        <AiFillHome className="text-orange-500"></AiFillHome>  <p className="ml-2">Cox-Bazar - Bangladesh</p>
        </div>
      </div>
      </div>
      <div className="p-4 bg-neutral text-neutral-content text-center">
      Copyright © 2022 - All right reserved</div>
    </footer>
    
  );
};

export default Footer;
