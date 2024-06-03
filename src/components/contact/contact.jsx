import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "../home/home.css";

// importing images
import man from "../../assets/images/man.png";
import setting from "../../assets/images/setting.png";
import diagram from "../../assets/images/diagram.png";
function Contact() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="bg-[#014E56] flex justify-around py-20 px-20 max-[376px]:px-2 max-[768px]:flex-col">
          <li className="list-none text-white mb-5">
            <h2 className="text-[80px] font-bold  max-[768px]:text-center max-[376px]:text-[40px] ">
              Contact
            </h2>
            <p className="text-[#F67E7E] text-[40px]  max-[376px]:text-[25px]    max-[768px]:mx-auto  max-[768px]:text-center   font-bold ">
              Ask about us
            </p>
            <div className="flex  my-5">
              <img
                src={man}
                className=" max-[376px]:w-[72px]  max-[376px]:h-[72px]"
                alt=""
              />
              <p className="text-[20px] font-[700] mt-3 ml-10 max-[376px]:text-[18px] max-[376px]:w-[232px]  ">
                The quality of our talent network
              </p>
            </div>
            <div className="flex  my-5">
              <img
                className=" max-[376px]:w-[72px]  max-[376px]:h-[72px]"
                src={setting}
                alt=""
              />
              <p className="text-[20px] font-[700] mt-3 ml-10 max-[376px]:text-[18px] max-[376px]:w-[232px] ">
                Usage & implementation of our software
              </p>
            </div>
            <div className="flex  my-5 ">
              <img
                className=" max-[376px]:w-[72px]  max-[376px]:h-[72px]"
                src={diagram}
                alt=""
              />
              <p className="text-[20px] font-[700] ml-10 mt-4 max-[376px]:text-[18px] max-[376px]:w-[232px] ">
                How we help drive innovation
              </p>
            </div>
          </li>
          <li className="flex flex-col text-white list-none">
            <input
              className="bg-[#014E56] border-solid border-x-0 border-t-0 border-b-2  w-[540px] max-[376px]:w-[325px]"
              placeholder="Name"
              type="text"
            />
            <input
              className="my-5 bg-[#014E56] border-solid border-x-0 border-t-0 border-b-2  w-[540px] max-[376px]:w-[325px]"
              placeholder="Email address"
              type="text"
            />
            <input
              className="my-5 bg-[#014E56] border-solid border-x-0 border-t-0 border-b-2  w-[540px] max-[376px]:w-[325px]"
              placeholder="Company name"
              type="text"
            />
            <input
              className="my-5 bg-[#014E56] border-solid border-x-0 border-t-0 border-b-2  w-[540px] max-[376px]:w-[325px]"
              placeholder="Title"
              type="text"
            />
            <input
              className="my-5 bg-[#014E56] border-solid border-x-0 border-t-0 border-b-2  w-[540px] max-[376px]:w-[325px]"
              placeholder="Message"
              type="textarea"
            />
            <button
              className="bg-white w-[100px] text-[#004047] rounded-full h-[30px] mt-3"
              type="submit"
            >
              submit
            </button>
          </li>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
