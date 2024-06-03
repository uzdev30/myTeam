import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import "../home/home.css";

// import images
import giffin from "../../assets/images/griffin.jpg";
import drake from "../../assets/images/drake.jpg";
import cruz from "../../assets/images/cruz.jpg";
import verge from "../../assets/images/logo-verge.png";
import jak from "../../assets/images/jakarta.png";
import guar from "../../assets/images/Object.png";
import gad from "../../assets/images/gad.png";
import tech from "../../assets/images/logo-techradar.png";
import nikita from "../../assets/images/nikita.jpg";

function About() {
  return (
    <>
      <div id="container " className="container mx-auto text-white">
        <Header />
        <div className="bg-[#014E56] flex justify-between px-20 py-20 max-[376px]:px-0    max-[768px]:flex-col">
          <h2 className=" text-[100px] font-bold  max-[768px]:mx-auto max-[376px]:text-[40px]">
            About
          </h2>
          <div className="mr-20">
            <hr className="w-[40px] h-[2px] border-[2px]  border-[red]    max-[768px]:hidden" />
            <p className="text-[18px] w-[630px] pt-12  max-[768px]:text-center  max-[376px]:mx-auto max-[376px]:text-center   max-[768px]:ml-20 max-[768px]:mx-auto max-[768px]:w-[450px] max-[376px]:w-[300px] max-[376px]:ml-10  ">
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </div>
        <div className="bg-[#004047] py-20">
          <h1 className="font-bold text-[48px] text-center max-[376px]:text-[24px]">
            Meet the directors
          </h1>
          <ul className="mx-20 max-[376px]:mx-auto  py-5 flex justify-between flex-wrap max-[376px]:ml-2">
            <li className="bg-[#012F34] w-[320px]  max-[768px]:w-[250px] mx-5 my-5 h-[250px] max-[376px]:w-[320px]">
              <img
                className="rounded-full mx-auto pt-6"
                src={nikita}
                alt="img"
              />
              <div className="text-[#79C8C7] text-center mx-auto">
                Nikita Marks
              </div>
              <div className="text-center my-3 text-italic">Founser & CEO</div>
              <div className="w-[56px] text-[#012F34] font-bold  h-[56px] bg-[#F67E7E] text-[36px] rounded-full mx-auto mt-10 text-center item-center">
                +
              </div>
            </li>
            <li className="bg-[#012F34] w-[320px]  max-[768px]:w-[250px]  my-5 mx-5 h-[250px] max-[376px]:w-[320px]">
              <img className="rounded-full mx-auto pt-6" src={nikita} alt="" />
              <div className="text-[#79C8C7] text-center mx-auto">
                Cristian Duncan
              </div>
              <div className="text-center my-3 text-italic">
                Co-founder & COO
              </div>
              <div className="w-[56px] text-[#012F34] font-bold  h-[56px] bg-[#F67E7E] text-[36px] rounded-full mx-auto mt-10 text-center item-center">
                +
              </div>
            </li>
            <li className="bg-[#012F34] w-[320px]  max-[768px]:w-[250px]  my-5 mx-5 h-[250px] max-[376px]:w-[320px]">
              <img className="rounded-full mx-auto pt-6" src={cruz} alt="" />
              <div className="text-[#79C8C7] text-center mx-auto">
                Cruz Hamer
              </div>
              <div className="text-center my-3 text-italic">
                Co-founder & CTO
              </div>
              <div className="w-[56px] text-[#012F34] font-bold  h-[56px] bg-[#F67E7E] text-[36px] rounded-full mx-auto mt-10 text-center item-center">
                +
              </div>
            </li>
            <li className="bg-[#012F34] w-[320px]  max-[768px]:w-[250px]  my-5 mx-5 h-[250px] max-[376px]:w-[320px]">
              <img className="rounded-full mx-auto pt-6" src={drake} alt="" />
              <div className="text-[#79C8C7] text-center mx-auto">
                Drake Heaton
              </div>
              <div className="text-center my-3 text-italic">
                Business Development Lead
              </div>
              <div className="w-[56px] text-[#012F34] font-bold  h-[56px] bg-[#F67E7E] text-[36px] rounded-full mx-auto mt-10 text-center item-center">
                +
              </div>
            </li>
            <li className="bg-[#012F34] w-[320px]  max-[768px]:w-[250px]  my-5 mx-5 h-[250px] max-[376px]:w-[320px]">
              <img className="rounded-full  mx-auto pt-6" src={giffin} alt="" />
              <div className="text-[#79C8C7] text-center mx-auto">
                Giffin Wise
              </div>
              <div className="text-center my-3 text-italic">
                {" "}
                Lead Marketing
              </div>
              <div className="w-[56px] text-[#012F34] font-bold  h-[56px] bg-[#F67E7E] text-[36px] rounded-full mx-auto mt-10 text-center item-center">
                +
              </div>
            </li>
            <li className="bg-[#012F34] w-[320px]  max-[768px]:w-[250px]  my-5 mx-5 h-[250px] max-[376px]:w-[320px]">
              <div className="text-[#79C8C7] text-center mx-auto mt-5">
                Aden Allan
              </div>
              <div className="text-center my-3 text-italic w-[250px] mx-auto ">
                “Empowered teams create truly amazing products. Set the north
                star and let them follow it.”{" "}
              </div>
              <div className="mx-auto text-center mt-5">
                <i className="fa-brands fa-twitter text-[25px] mx-2 "></i>
                <i className="fa-brands fa-instagram text-[25px] mx-1"></i>
              </div>

              <div className="w-[56px] text-[#012F34] h-[56px] bg-[#79C8C7] text-[30px] font-bold rounded-full mx-auto mt-10 text-center item-center">
                x
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[#012F34] font-bold px-20 py-10">
          <h3 className="text-[48px] mx-auto text-center max-[376px]:text-[32px] max-[376px]:w-[327px]">
            Some our clients
          </h3>
          <div className="flex">
            <img
              className="mx-auto max-[768px]:w-[100px] max-[768px]:h-[20px] max-[376px]:w-[105px] max-[376px]:h-[15px] max-[376px]:mx-auto my-10"
              src={verge}
              alt=""
            />
            <img
              className="mx-auto max-[768px]:w-[100px] max-[768px]:h-[20px] max-[376px]:w-[105px] max-[376px]:h-[15px] max-[376px]:mx-auto my-10"
              src={jak}
              alt=""
            />
            <img
              className="mx-auto max-[768px]:w-[100px] max-[768px]:h-[20px] max-[376px]:w-[105px] max-[376px]:h-[15px] max-[376px]:mx-auto my-10"
              src={guar}
              alt=""
            />

            <img
              className="mx-auto max-[768px]:w-[100px] max-[768px]:h-[20px] max-[376px]:w-[105px] max-[376px]:h-[15px] max-[376px]:mx-auto my-10"
              src={tech}
              alt=""
            />
            <img
              className="mx-auto max-[768px]:w-[100px] max-[768px]:h-[20px] max-[376px]:w-[75px] max-[376px]:h-[20px] max-[376px]:mx-auto my-10"
              src={gad}
              alt=""
            />
          </div>
        </div>
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default About;
