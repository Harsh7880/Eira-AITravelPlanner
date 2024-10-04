import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const useViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  const getData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No Such Document");
    }
  };
  useEffect(() => {
    tripId && getData(tripId);
  }, [tripId]);

  return { trip };
};

export default useViewTrip;
