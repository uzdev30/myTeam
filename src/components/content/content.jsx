import React from "react";

function Content() {
  return (
    <div className="bg-[#014E56] pt-10  max-[768px]:pb-40">
      <ul className="xl:flex justify-between max-[768px]:flex-col">
        <li>
          <h4 className="ml-20 text-8xl w-[535px] font-bold text-white max-[768px]:text-center  max-[768px]:mx-auto max-[376px]:text-[40px]  max-[376px]:w-[220px]  max-[376px]:text-center">
            Find the best
            <span className=" text-[#F67E7E]"> talent</span>
          </h4>
        </li>
        <li className="my-10 mx-20 max-[376px]:mx-0">
          <hr className="size-10 h-px text-red-800  max-[768px]:hidden" />
          <p className="w-[445px] my-20  text-1.9xl  text-white mr-20  max-[768px]:text-center  max-[768px]:my-1  max-[768px]:mx-auto  max-[376px]:text-[18px] max-[768px]:mx-auto   max-[376px]:w-[327px]  max-[376px]:text-center max-[376px]:mx-auto ">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Content;
