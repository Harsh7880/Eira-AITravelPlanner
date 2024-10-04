
import UserTripCard from "../components/UserTripCard";
import useMyTrip from "../hooks/useMyTrip";

const MyTrips = () => {

  const {userTrips} = useMyTrip();

  return userTrips && (
    <div className="my-10 mb-20 px-6 lg:px-56">
      <h2 className="font-bold text-3xl">MyTrips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
        {userTrips?.map((trip, index) => (
          <UserTripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
