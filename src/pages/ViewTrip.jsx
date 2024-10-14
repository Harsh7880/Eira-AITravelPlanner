import InfoSection from "../components/InfoSection";
import Hotel from "../components/Hotel";
import PlacesToVisit from "../components/PlacesToVisit";
import useViewTrip from "../hooks/useViewTrip";

const ViewTrip = () => {
  const { trip } = useViewTrip();
  return (
    <div className="lg:p-10 md:px-20 py-20 lg:px-44 xl:px-56 p-8">
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
