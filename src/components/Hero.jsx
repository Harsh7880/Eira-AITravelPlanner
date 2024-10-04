/* eslint-disable react/no-unescaped-entities */
import EiRa from "../assets/EiRa1.png";
import logo2 from "../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import About from "./About";
import Testimonials from "./Testimonials";
import { HERO } from "../utils/constants";
const Hero = () => {
  return (
    <div className="mt-10 pt-4">
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
        <h2 className="text-7xl font-bold">
          <span className="text-[#002c6a]">{HERO.title}</span>
        </h2>
        <p className="font-normal text-gray-500 w-[70%]">
          {HERO.titleDescription}
        </p>
        <NavLink
          to={"/create-trip"}
          className="shadow-sm shadow-[#21BCBE]  text-black text-xl font-medium py-3 px-10 rounded-full"
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
