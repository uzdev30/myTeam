import React from "react";

function Sidebar() {
  return (
    <div className="py-12 bg-[#F67E7E] flex justify-around max-[376px]:flex-col">
      <h3 className="text-[#012F34] font-bold text-[38px] max-[376px]:w-[327px] max-[376px]:mx-auto max-[376px]:text-center">
        Ready to get started?
      </h3>
      <button className="h-10 w-[120px] text-[20px] border-[#012F34] text-[#012f34] rounded-full border hover:bg-white max-[768px]::mt-3 max-[376px]:mx-auto">
        contact us
      </button>
    </div>
  );
}

export default Sidebar;
