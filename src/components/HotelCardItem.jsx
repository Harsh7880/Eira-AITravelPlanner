/* eslint-disable react/prop-types */
import { usePlacePhoto } from "../hooks/usePhotoURL";
import { Link } from "react-router-dom";
import hotelPlaceholder from '../assets/hotel-3.jpg'
const HotelCardItem = ({ hotel }) => {
  const data = {
    textQuery: hotel?.hotelName,
  };
  const photoURL = usePlacePhoto(hotel, data);
  return (
    hotel && (
      <Link
        target="_blank"
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel?.hotelName +
          ", " +
          hotel?.hotelAddress
        }
      >
        <div className="shadow-lg hover:scale-105 cursor-pointer transition-all duration-200 rounded-lg p-3 h-[330px]">
          <img
            className="rounded-xl h-[150px] w-[200px] object-cover mx-auto"
            src={photoURL? photoURL : hotelPlaceholder}
            alt={hotel}
          />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium mt-2">{hotel?.hotelName}</h2>
            <h2 className="text-gray-500 text-xs">📍 {hotel?.hotelAddress}</h2>
            <div className="flex gap-5"><h2 className="text-sm">💰 {hotel?.price}</h2>
            <h2 className="text-sm">⭐ {hotel?.rating}</h2></div>
          </div>
        </div>
      </Link>
    )
  );
};

export default HotelCardItem;
