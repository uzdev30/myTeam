import { Link } from "react-router-dom";
import { useState } from "react";

///importing images
import Logo from "../../assets/images/logo.svg";
function Header() {
  const [isOpen, setIsopen] = useState(true);

  return (
    <header className=" px-20 py-5 bg-[#014E56] ">
      <ul className="flex text-white  justify-between">
        <li className="flex text-white text-lg  ">
          <Link to={"/"}>
            <img
              src={Logo}
              className=" max-[376px]:w-[120px] max-[376px]:mt-5  "
              alt="logo"
            />
          </Link>
          <Link to={"/"}>
            {" "}
            <a
              href="#"
              className="my-1 mx-8 hover:text-[#F67E7E]  max-[376px]:hidden"
            >
              home
            </a>
          </Link>
          <Link to={"/about"}>
            {" "}
            <a
              className="my-1 mx-8 hover:text-[#F67E7E] max-[376px]:hidden"
              href="#"
            >
              about
            </a>
          </Link>
        </li>
        <li className="w-40 text-lg flex ">
          <div>
            <i
              onClick={() => setIsopen((prev) => !prev)}
              className={`${
                !isOpen && "max-[376px]:hidden"
              } fas fa-bars my-3 invisible  max-[376px]:visible  max-[376px]:pl-20   max-[376px]:ml-20 max-[376px]:mt-5  hover:text-[#F67E7E] `}
            ></i>
            <div
              className={`${
                isOpen && "hidden"
              } bg-[#012F34] w-[160px] h-[200px] ml-[60px] rounded `}
            >
              <i
                onClick={() => setIsopen((prev) => !prev)}
                className="fas fa-x hover:text-[red] ml-[130px]"
              ></i>
              <ul className="mx-2">
                <li className="mb-5">
                  <Link to={"/"}>
                    <a href="">home</a>
                  </Link>
                </li>
                <li className="mb-5">
                  <Link to={"/about"}>
                    <a href="">about</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"}>
                    <button className="border border-white rounded-full hover:bg-white hover:text-black p-1">
                      contact us
                    </button>
                  </Link>
                </li>
              </ul>
              {/* {Routes.map((route) => {
                return <li key={route.id}>{route.title}</li>;
              })} */}
            </div>
          </div>
          <Link to={"/contact"}>
            <button className="px-2 py-1  border border-white rounded-full hover:bg-white hover:text-black visible md:ml-10  max-[376px]:invisible">
              contact us
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
