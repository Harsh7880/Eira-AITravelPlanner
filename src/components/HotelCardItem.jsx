/* eslint-disable react/prop-types */
import { usePlacePhoto } from "../hooks/usePhotoURL";
import { Link } from "react-router-dom";

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
        <div className="hover:scale-105 cursor-pointer transition-all duration-200">
          <img
            className="rounded-xl h-[200px] w-[200px] object-cover"
            src={photoURL}
            alt={hotel}
          />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium mt-2">{hotel?.hotelName}</h2>
            <h2 className="text-gray-500 text-xs">📍 {hotel?.hotelAddress}</h2>
            <h2 className="text-sm">💰 {hotel?.price}</h2>
            <h2 className="text-sm">⭐ {hotel?.rating}</h2>
          </div>
        </div>
      </Link>
    )
  );
};

export default HotelCardItem;
