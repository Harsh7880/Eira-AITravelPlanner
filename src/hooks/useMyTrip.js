import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
const useMyTrip = () => {
    const [userTrips, setUsertrips] = useState([]);
    useEffect(() => {
      GetUserTrips();
    }, []);
    const navigate = useNavigate();
  
    /**
     * Get's the all trips belobgs to a user
     * @returns
     */
    const GetUserTrips = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/");
        return;
      }
      setUsertrips([]);
      const q = query(
        collection(db, "AITrips"),
        where("userEmail", "==", user?.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUsertrips((prevVal) => [...prevVal, doc.data()]);
      });
    };
    return {userTrips};
}

export default useMyTrip