import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FaLocationArrow } from "react-icons/fa";
import about from "../assets/about.png";
import { ABOUT_TEXT } from "../utils/constants";
const About = () => {
  return (
    <div className="lg:my-10 lg:mt-32 my-8 lg:px-24 grid grid-cols-12 gap-3">
      <div className="lg:col-span-6 col-span-12 pt-5 items-center">
        <h2 className="mb-6 lg:text-5xl text-3xl px-4 lg:px-0 text-center font-bold text-[#002c6a]">
          {ABOUT_TEXT.title}
        </h2>
        <p className="lg:text-lg lg:px-0 px-6 text-sm font-medium">{ABOUT_TEXT.description}</p>
        <Link to={"create-trip"}>
          {" "}
          <Button className="flex gap-2 mt-6 items-center bg-[#21BCBE] lg:px-16 px-8 lg:py-7 py-5 mx-auto rounded-full lg:text-xl text-lg">
            {ABOUT_TEXT.buttonLable} <FaLocationArrow />
          </Button>{" "}
        </Link>
      </div>
      <div className="lg:col-span-6 col-span-12 items-center justify-center mt-10">
        <img className="w-[80%] lg:h-[400px] rounded-2xl mx-auto" src={about} alt="" />
      </div>
    </div>
  );
};

export default About;
