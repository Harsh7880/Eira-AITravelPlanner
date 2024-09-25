import InfoSection from "./InfoSection";
import Hotel from "./Hotel";
import PlacesToVisit from "./PlacesToVisit";
import useViewTrip from "../hooks/useViewTrip";

const ViewTrip = () => {
  const { trip } = useViewTrip();
  return (
    <div className="p-10 md:px-20 py-20 lg:px-44 xl:px-56">
      {/* information Section  */}
      <InfoSection trip={trip} />

      {/* Hotel */}
      <Hotel trip={trip} />

      {/* Places to visit */}
      <PlacesToVisit trip={trip} />
    </div>
  );
};

export default ViewTrip;
