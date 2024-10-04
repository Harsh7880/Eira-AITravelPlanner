import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FaLocationArrow } from "react-icons/fa";
import about from "../assets/about.png";
import { ABOUT_TEXT } from "../utils/constants";
const About = () => {
  return (
    <div className="my-10 mt-32 lg:px-24 grid grid-cols-12 gap-3">
      <div className="col-span-6 pt-5">
        <h2 className="mb-6 text-5xl font-bold text-[#002c6a]">
          {ABOUT_TEXT.title}
        </h2>
        <p className="text-lg font-medium">{ABOUT_TEXT.description}</p>
        <Link to={"create-trip"}>
          {" "}
          <Button className="flex gap-2 mt-6 items-center bg-[#21BCBE] px-16 py-7 rounded-full text-xl">
            {ABOUT_TEXT.buttonLable} <FaLocationArrow />
          </Button>{" "}
        </Link>
      </div>
      <div className="col-span-6 items-center justify-center">
        <img className="w-[80%] h-[400px] rounded-2xl mx-auto" src={about} alt="" />
      </div>
    </div>
  );
};

export default About;
