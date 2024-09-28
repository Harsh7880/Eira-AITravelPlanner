/* eslint-disable react/prop-types */

import PlaceCard from "./PlaceCard";

const PlacesToVisit = ({ trip }) => {
  return (
    trip && (
      <div className="my-10">
        <h2 className="font-bold text-xl">Places To Visit</h2>
        <div>
          {trip?.tripData?.itinerary.map((item, index) => (
            <div key={index}>
              <div className="my-3">
                <h2 className="font-semibold text-lg mt-2">Day {item.day}</h2>
                <div className="grid md:grid-cols-2 gap-5 mx-2 my-2">
                  {item?.plan.map((place, index) => (
                    <div key={index}>
                      <h2 className="text-sm font-medium text-[#7B68EE]">
                        {place?.time}
                      </h2>
                      <PlaceCard place={place} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default PlacesToVisit;
