import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
function Footer() {
  return (
    <footer className="px-20 py-10  max-[376px]:px-0 bg-[#012529]   ">
      <ul className="flex justify-between  max-[768px]:flex-col    ">
        <li className="flex  justify-between  max-[376px]:flex-col">
          <div className="max-[376px]:items-center">
            <Link to={"/"}>
              <img className="max-[376px]:mx-auto" src={Logo} alt="img" />
            </Link>
            <div className="text-white mt-5 max-[376px]:mt-10  max-[376px]:text-center ">
              <Link to={"/"}>
                <a href="#" className=" hover:text-[#F67E7E]">
                  home
                </a>
              </Link>
              <Link to={"/about"}>
                <a
                  className="ml-10 hover:text-[#F67E7E] max-[376px]:text-center"
                  href="#"
                >
                  about
                </a>
              </Link>
            </div>
          </div>
          <span className="ml-[300px] max-[376px]:ml-0 max-[768px]:ml-0  text-white max-[376px]:mr-0  max-[768px]:mr-20 max-[376px]:mt-10  max-[376px]:mx-auto max-[376px]:text-center">
            987 Hillcrest Lane <br /> Irvine, CA <br /> California 92714 <br />{" "}
            Call Us : 949-833-7432
          </span>
        </li>
        <li className="  max-[768px]:flex      max-[376px]:flex-col       ">
          <div className="ml-30  max-[768px]:mt-10 max-[376px]:flex max-[376px]:mx-auto max-[376px]:text-center">
            <i className="fa-brands fa-facebook text-white text-[30px] w-27 hover:text-[#F67E7E]"></i>
            <i className="fa-brands fa-pinterest text-white text-[30px] mx-2 w-27  hover:text-[#F67E7E]"></i>
            <i className="fa-brands fa-twitter text-white text-[30px] w-27  hover:text-[#F67E7E] "></i>
          </div>
          <div className="mt-10 max-[768px]:mt-10    max-[768px]:ml-10 text-white my-5 max-[376px]:text-center   ">
            Copyright 2020. All Rights Reserved
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
