/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { usePlacePhoto } from "../hooks/usePhotoURL";
import placeholder from '../assets/placeholder.jpg'
const PlaceCard = ({ place }) => {
  const data = {
    textQuery: place?.placeName,
  };
  const photoURL = usePlacePhoto(place, data);
  return (
    place && (
      <Link
        target="_blank"
        to={
          "https://www.google.com/maps/search/?api=1&query=" + place?.placeName
        }
      >
        <div className="grid grid-cols-12 my-2 py-6 px-5 gap-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
         
          <div className="lg:col-span-8 col-span-7 flex flex-col gap-2">
            <h2 className="font-bold lg:text-lg text-sm">{place?.placeName}</h2>
            <p className="text-gray-500 lg:text-sm text-xs">{place?.placeDetails}</p>
            <p className="lg:text-sm text-xs">💵 {place?.ticketPricing}</p>
            <p className="lg:text-sm text-xs font-medium">🕙 {place?.timeTravel}</p>
          </div>
          <div className="lg:col-span-4 col-span-5 flex justify-between items-center">
            <img
              className="rounded-xl lg:h-[150px] w-[230px] h-[130px] object-cover"
              src={photoURL ? photoURL: placeholder}
              alt=''
            />
          </div>
        </div>
      </Link>
    )
  );
};

export default PlaceCard;
