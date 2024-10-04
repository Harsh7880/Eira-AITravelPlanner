/* eslint-disable react/no-unescaped-entities */
import EiRa from "../assets/EiRa1.png";
import logo2 from "../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import about from "../assets/about.png";
import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-10 pt-4">
      <div className="flex mb-5 items-center justify-center mx-auto gap-3 w-40">
        <img
          className="border-2 border-[#21BCBE] h-12 w-12 rounded-full"
          src={logo2}
          alt=""
        />
        <Link to={"/"}>
          <img className="w-[80%]" src={EiRa} alt="logo" />
        </Link>
      </div>
      <div className="lg:px-72 flex items-center flex-col text-center gap-8">
        <h2 className="text-7xl font-bold">
          <span className="text-[#002c6a]">
            {" "}
            Hi, I'm Eira, your personal travel agent
          </span>
        </h2>
        <p className="font-normal text-gray-500 w-[70%]">
          {" "}
          Get custom travel plans that match your style, interests, and budget.
          Explore destinations and experiences just for you.
        </p>
        <NavLink
          to={"/create-trip"}
          className="shadow-sm shadow-[#21BCBE]  text-black text-xl font-medium py-3 px-10 rounded-full"
        >
          Start Planning Your Trip for Free
        </NavLink>
      </div>
      <div className="my-10 mt-32 lg:px-24 grid grid-cols-12 gap-3">
        <div className="col-span-6 pt-5">
          <h2 className="mb-6 text-5xl font-bold text-[#002c6a]">
            Plan smarter, travel better with AI
          </h2>
          <p className="text-lg font-medium">
            Meet Eira, your personal AI travel companion. From must-see
            destinations to perfect stays, flights, and road trips, she’s here
            to make vacation planning a breeze. With Eira, forget the chaos of
            managing multiple tabs and apps—this is the only travel tool you’ll
            need. Simply ask Eira for personalized destination ideas and let her
            craft the perfect itinerary tailored to your style and budget.
            Discover exclusive content from travel experts you’ll love, and
            watch as your customized travel plan takes shape, ensuring every
            moment of your trip is unforgettable.
          </p>
          <Link to={'create-trip'}> <Button className="flex gap-2 mt-6 items-center bg-[#21BCBE] px-16 py-7 rounded-full text-xl">
            Plan a new trip <FaLocationArrow />
          </Button> </Link>
        </div>
        <div className="col-span-6 items-center">
          <img className="w-[80%] rounded-2xl mx-auto" src={about} alt="" />
        </div>
      </div>
      <div className="my-24 lg:px-24">
        <div className="flex items-center justify-center px-64">
          <h2 className="mb-6 text-center text-5xl font-bold text-[#002c6a]">
            Sweet Words from Happy Travelers about Eira
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5 px-12">
          <div className="col-span-4 bg-[#b0efef] px-8 py-10 rounded-xl">
            <p className="text-lg font-medium">
              Eira transformed my travel planning! The insights were spot-on,
              and the itineraries were perfectly tailored to my preferences. I
              loved the engaging videos and reels!
            </p>
          </div>
          <div className="col-span-4 bg-[#b0efef] px-8 py-10 rounded-xl">
            <p className="text-lg font-medium">
              This is the ultimate trip planner! Eira provided a wealth of
              information and crafted an itinerary that exceeded my
              expectations. The visual content was a delightful bonus!
            </p>
          </div>
          <div className="col-span-4 bg-[#b0efef] px-8 py-10 rounded-xl">
            <p className="text-lg font-medium">
              I can't recommend Eira enough! The trip planning process was
              seamless, and the itineraries were packed with useful details. The
              videos made it even more exciting!
            </p>
          </div>
          <div className="col-span-6 bg-[#b0efef] px-8 py-10 rounded-xl">
            <p className="text-lg font-medium">
              Eira is a game-changer for travelers! The personalized itineraries
              were fantastic, and the amount of helpful information available
              was impressive. Loved the creative videos!
            </p>
          </div>
          <div className="col-span-6 bg-[#b0efef] px-8 py-10 rounded-xl">
            <p className="text-lg font-medium">
              Planning my vacation was a breeze with Eira! The itineraries were
              fantastic and tailored just for me. Plus, the engaging video
              content kept me inspired!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
