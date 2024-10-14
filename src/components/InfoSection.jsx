/* eslint-disable react/prop-types */
import { IoIosSend } from "react-icons/io";
import { Button } from "./ui/button";
import { usePlacePhoto } from "../hooks/usePhotoURL";
import placeholder from '../assets/placeholder.jpg'
const InfoSection = ({ trip }) => {
  const data = {
    textQuery: trip?.userSelection?.location?.label,
  };
  const photoURL = usePlacePhoto(trip, data);

  return (
    trip && (
      <div className="">
        <img
          className="lg:h-[340px] h-[200px] w-full object-cover rounded-lg"
          src={photoURL ? photoURL : placeholder}
          alt=""
        />
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-3 py-6">
            <h2 className="text-2xl font-bold">
              {trip?.userSelection?.location?.label}
            </h2>
            <div className="flex lg:flex-row flex-col gap-4">
              <h2 className="bg-gray-200 lg:text-sm text-xs text-gray-500 px-3 py-1 rounded-full">
                📅 {trip?.userSelection?.noOfDays} Day
              </h2>
              <h2 className="bg-gray-200 lg:text-sm text-xs text-gray-500 px-3 py-1 rounded-full">
                💰 {trip?.userSelection?.budget} Budget
              </h2>
              <h2 className="bg-gray-200 lg:text-sm text-xs text-gray-500 px-3 py-1 rounded-full">
                🥂 No of Traveller: {trip?.userSelection?.noOfPeople} People{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default InfoSection;
