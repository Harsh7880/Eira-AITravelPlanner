/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom"
const Hero = () => {
  return (
    <div className="mt-10 pt-4 lg:px-56">
      <div className="flex items-center flex-col text-center gap-6">
        <h2 className="text-7xl font-bold"><span className="text-[#7B68EE]"> Discover your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips </h2>
        <p className="font-normal text-gray-500"> Your Personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget</p>
        <NavLink to={'/create-trip'} className="bg-[#7B68EE] text-white py-3 px-10 rounded-full" >Plan Your Journey, It'as Free</NavLink>
      </div>
    </div>
  )
}

export default Hero