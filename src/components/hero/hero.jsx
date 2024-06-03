import React from "react";
import man from "../../assets/images/man.png";
import setting from "../../assets/images/setting.png";
import diagram from "../../assets/images/diagram.png";

function Hero() {
  return (
    <div className="py-20 flex justify-between list-none bg-[#012F34] text-white max-[376px]:px-0 px-20 max-[376px]:px-3 max-[376px]:py-0  max-[768px]:flex-col max-[376px]:py-0 max-[376px]:pb-20  ">
      <li className=" my-20">
        <hr className="w-11 h-  border-2  max-[768px]:b-1 bg-[red] border-[#F67E7E]" />
        <h5 className="mt-10 text-5xl font-bold w-[445px]  max-[768px]:w-[450px]  max-[768px]:text-[32px] max-[376px]:w-[240px] max-[376px]:text-start">
          Build & manage distributed teams like no one else
        </h5>
      </li>
      <li className="mt-20  max-[768px]:mt-2 mr-20 max-[376px]:mt-0 max-[376px]:mr-0 ">
        <div className="flex max-[376px]:flex-col ">
          <img
            className="mr-5 w-[72px] h-[72px] max-[376px]:text-center max-[376px]:mx-auto   "
            src={man}
            alt=""
          />
          <div className="max-[376px]:items-center">
            <h6 className="text-[#F67E7E] max-[376px]:text-center max-[376px]:mt-2 max-[376px]:w-[200px] max-[376px]:mx-auto max-[376px]:text-[18px] max-[376px]:my-5">
              Experienced Individuals
            </h6>
            <p className="text-1xl w-[405px] max-[376px]:w-[327px] max-[376px]:text-center max-[376px]:mx-auto">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>
        <div className=" flex max-[376px]:flex-col max-[376px]:my-10 ">
          <img
            className="mr-5 w-[72px] h-[72px] max-[376px]:text-center max-[376px]:mx-auto   "
            src={setting}
            alt=""
          />
          <div className="max-[376px]:items-center">
            <h6 className="text-[#F67E7E] max-[376px]:text-center max-[376px]:mt-2 max-[376px]:w-[200px] max-[376px]:mx-auto max-[376px]:text-[18px] max-[376px]:my-5">
              Easy to Implement
            </h6>
            <p className="text-1xl w-[405px] max-[376px]:w-[327px] max-[376px]:text-center max-[376px]:mx-auto">
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>
        <div className="flex max-[376px]:flex-col">
          <img
            className="mr-5 w-[72px] h-[72px] max-[376px]:text-center max-[376px]:mx-auto   "
            src={diagram}
            alt=""
          />
          <div className="max-[376px]:items-center">
            <h6 className="text-[#F67E7E] max-[376px]:text-center max-[376px]:mt-2 max-[376px]:w-[200px] max-[376px]:mx-auto max-[376px]:text-[18px] max-[376px]:my-5">
              Enhanced Productivity
            </h6>
            <p className="text-1xl w-[405px] max-[376px]:w-[327px] max-[376px]:text-center max-[376px]:mx-auto">
              Our customized platform with in-built analytics helps you manage
              your distributed teams
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Hero;
