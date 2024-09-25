/* eslint-disable react/prop-types */
import placeholder from "../assets/placeholder.jpg";
import { IoIosSend } from "react-icons/io";
import { Button } from "./ui/button";

const InfoSection = ({ trip }) => {

  return (
    trip && (
      <div className="">
        <img
          className="h-[340px] w-full object-cover rounded-lg"
          src={placeholder}
          alt=""
        />
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-3 py-6">
            <h2 className="text-2xl font-bold">
              {trip?.userSelection?.location?.label}
            </h2>
            <div className="flex gap-4">
              <h2 className="bg-gray-200 text-sm text-gray-500 px-3 py-1 rounded-full">
                📅 {trip?.userSelection?.noOfDays} Day
              </h2>
              <h2 className="bg-gray-200 text-sm text-gray-500 px-3 py-1 rounded-full">
                💰 {trip?.userSelection?.budget} Budget
              </h2>
              <h2 className="bg-gray-200 text-sm text-gray-500 px-3 py-1 rounded-full">
                🥂 No of Traveller: {trip?.userSelection?.noOfPeople} People{" "}
              </h2>
            </div>
          </div>
          <Button>
            <IoIosSend />
          </Button>
        </div>
      </div>
    )
  );
};

export default InfoSection;
