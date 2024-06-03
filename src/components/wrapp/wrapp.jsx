import React from "react";
// import images

import kady from "../../assets/images/kady.jpg";
import aiysha from "../../assets/images/aiysha.jpg";
import arthur from "../../assets/images/arthur.jpg";
import copy from "../../assets/images/copy.png";

function Wrapp() {
  return (
    <div className="text-white  bg-[#004047] py-20 px-20   max-[768px]:text-center max-[376px]:px-0">
      <h2 className="w-[930px] font-bold text-5xl text-center mx-auto  max-[768px]:w-[453px]  max-[768px]:text-[32px] max-[376px]:w-[327px] max-[376px]:mx-auto max-[376px]:">
        Delivering real results for top companies. Some of our
        <span className="text-[#79C8C7]"> success stories.</span>
      </h2>
      <ul className="flex justify-between py-10 items-center  mx-auto  max-[768px]:flex-col ">
        <li>
          <img src={copy} className="mx-auto translate-y-2  " alt="" />
          <p className="w-[350px] mx-auto text-center  ">
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <div className="text-[#79C8C7] font-bold my-4 text-center">
            Kady Baker
          </div>
          <div className="text-italic mx-auto text-center">
            Product Manager at Bookmark
          </div>
          <img
            className=" rounded-full text-cnter mx-auto mt-6 "
            src={kady}
            alt="img"
          />
        </li>
        <li className=" max-[768px]:my-20">
          <img src={copy} className="mx-auto translate-y-2  " alt="" />

          <p className="w-[350px] mx-auto text-center">
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <div className="text-[#79C8C7] font-bold my-4 text-center">
            Aiysha Reese
          </div>
          <div className="text-italic mx-auto text-center">
            Founder of Manage
          </div>
          <img
            className="rounded-full text-cnter mx-auto mt-6"
            src={aiysha}
            alt="img"
          />
        </li>
        <li className=" max-[768px]:my-20">
          <img src={copy} className="mx-auto translate-y-2  " alt="" />

          <p className="w-[350px] mx-auto text-center">
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <div className="text-[#79C8C7] font-bold my-4 text-center">
            Arthur Clarke{" "}
          </div>
          <div className="text-italic mx-auto text-center">
            Co-founder of MyPhysio
          </div>
          <img
            className="rounded-full text-cnter mx-auto mt-6"
            src={arthur}
            alt="img"
          />
        </li>
      </ul>
    </div>
  );
}

export default Wrapp;
