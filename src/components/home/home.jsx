import React from "react";
import "./home.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Content from "../content/content";
import Hero from "../hero/hero";
import Wrapp from "../wrapp/wrapp";
import Sidebar from "../sidebar/sidebar";

function Home() {
  return (
    <>
      <div className=" container mx-auto">
        <Header />
        <Content />
        <Hero />
        <Wrapp />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default Home;
