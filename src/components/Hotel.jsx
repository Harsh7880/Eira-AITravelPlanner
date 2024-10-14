/* eslint-disable react/prop-types */

import HotelCardItem from './HotelCardItem';
const Hotel = ({trip}) => {
  return (
    trip && (
      <div>
        <h2 className="font-bold text-xl my-5">Hotel Recommendation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4">
          {trip?.tripData?.hotelOptions.map((hotel, index) => (
           <HotelCardItem key={index} hotel = {hotel} />
          ))}
        </div>
      </div>
    )
  );
}

export default Hotel