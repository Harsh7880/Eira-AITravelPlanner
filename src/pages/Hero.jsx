/* eslint-disable react/no-unescaped-entities */
import EiRa from "../assets/EiRa1.png";
import logo2 from "../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import About from "../pages/About";
import Testimonials from "./Testimonials";
import { HERO } from "../utils/constants";
import Youtube from "../components/Youtube";
import { useEffect, useState } from "react";
import axios from "axios";
const Hero = () => {

  const [videoData,setVideoData] = useState([]);
  const getYoubeVideo =  async () => {
    
     axios
        .get(
          // `https://www.googleapis.com/youtube/v3/search?key=AIzaSyANDEjf6YtxlRET_w5ZDfrIacNoJx_zMHA&q=lucknow&type=video&videoDuration=short&part=snippet`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((resp) => {
          setVideoData(resp?.data);
        //  console.log(resp?.data);
        })
        .catch((err) => {
          console.error(err);
        });
  }

  useEffect(()=>{
    getYoubeVideo();
  })

  return (
    <div className="mt-10 pt-4 lg:px-0 px-8">
      <div className="flex mb-5 items-center justify-center mx-auto gap-3 w-40">
        <img
          className="border-2 border-[#21BCBE] h-12 w-12 rounded-full"
          src={logo2}
          alt="logo"
        />
        <Link to={"/"}>
          <img className="w-[80%]" src={EiRa} alt="logo" />
        </Link>
      </div>
      <div className="lg:px-72 flex items-center flex-col text-center gap-8">
        <h2 className="lg:text-7xl text-4xl font-bold">
          <span className="text-[#002c6a]">{HERO.title}</span>
        </h2>
        <p className="font-normal text-gray-500 w-[70%]">
          {HERO.titleDescription}
        </p>
        <NavLink
          to={"/create-trip"}
          className="shadow-sm shadow-[#21BCBE]  text-black lg:text-xl text-lg font-medium py-3 lg:px-10 px-6 rounded-full"
        >
          {HERO.buttonLable}
        </NavLink>
      </div>
      <About />
      <Testimonials />

    </div>
  );
};

export default Hero;
