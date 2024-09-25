/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import hotel2 from '../assets/hotel-2.jpg'
const Hotel = ({trip}) => {
  return (
    trip && (
      <div>
        <h2 className="font-bold text-xl my-5">Hotel Recommendation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trip?.tripData?.hotelOptions.map((hotel, index) => (
            <Link
              target='_blank'
              key={index}
              to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ", " +hotel?.hotelAddress 
              }
            >
              <div
                
                className="hover:scale-105 cursor-pointer transition-all duration-200"
              >
                <img className="rounded-xl" src={hotel2} alt={hotel} />
                <div className="my-2 flex flex-col gap-2">
                  <h2 className="font-medium mt-2">{hotel?.hotelName}</h2>
                  <h2 className="text-gray-500 text-xs">
                    📍 {hotel?.hotelAddress}
                  </h2>
                  <h2 className="text-sm">💰 {hotel?.price}</h2>
                  <h2 className="text-sm">⭐ {hotel?.rating}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
}

export default Hotel