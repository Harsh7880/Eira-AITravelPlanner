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
            className="rounded-xl lg:h-[150px] lg:w-[200px] h-[120px] w-[180px] object-cover mx-auto"
            src={photoURL? photoURL : hotelPlaceholder}
            alt={hotel}
          />
          <div className="my-2 flex flex-col lg:gap-2 gap-3">
            <h2 className="font-medium mt-2 lg:text-lg text-sm">{hotel?.hotelName}</h2>
            <h2 className="text-gray-500 text-xs">📍 {hotel?.hotelAddress}</h2>
            <div className="flex lg:flex-row flex-col lg:gap-5 gap-3">
              <h2 className="lg:text-sm text-xs">💰 {hotel?.price}</h2>
              <h2 className="lg:text-sm text-xs">⭐ {hotel?.rating}</h2></div>
          </div>
        </div>
      </Link>
    )
  );
};

export default HotelCardItem;
