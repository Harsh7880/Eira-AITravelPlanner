import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams,  } from "react-router-dom"
import InfoSection from "./InfoSection";
import Hotel from "./Hotel";
import PlacesToVisit from "./PlacesToVisit";

const ViewTrip = () => {

    const {tripId} = useParams();
    const [trip,setTrip] = useState([]);
    const getData = async ()=>{
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
           setTrip(docSnap.data());
          } else {
        // docSnap.data() will be undefined in this case
           console.log("No such document!");
           toast("No Such Document");
       }
    }
    useEffect (()=>{
        tripId && getData(tripId)
    },[tripId])
    
  return (
    <div className="p-10 md:px-20 py-20 lg:px-44 xl:px-56">
        {/* information Section  */}
        <InfoSection trip={trip} />

        {/* Hotel */}
        <Hotel trip={trip} />

        {/* Places to visit */}
        <PlacesToVisit trip={trip} />
    </div>
  )
}

export default ViewTrip