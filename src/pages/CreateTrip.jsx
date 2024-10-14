import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  SELECT_TRAVEL_LIST,
  SELECT_BUDGET_OPTIONS,
  GENERATE_TRIP_PROMPT,
} from "../utils/constants";
import toast from "react-hot-toast";
import { chatSession } from "../services/AIModel";
import logo from "../assets/logo.jpg";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useForm from "..//hooks/useForm";
import { CREATE_TRIP } from "../utils/constants";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [openDialog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { handleInputChanges, formData } = useForm();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => getUserData(tokenResponse),
    onError: (tokenResponse) => console.log(tokenResponse),
  });

  const generateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (formData?.noOfDays > 10) {
      toast.error(CREATE_TRIP.noOfDaysError);
    }
    if (!formData?.location || !formData?.noOfPeople || !formData?.budget) {
      toast.error(CREATE_TRIP.fillAllTheDeatilsError);
      return;
    }
    const finalPrompt = GENERATE_TRIP_PROMPT.replace(
      "{location}",
      formData?.location.label
    )
      .replace(CREATE_TRIP.noOfDays, formData?.noOfDays)
      .replace(CREATE_TRIP.noOfPeople, formData?.noOfPeople)
      .replace(CREATE_TRIP.budget, formData?.budget)
      .replace(CREATE_TRIP.noOfDays, formData?.noOfDays);

    setLoading(true);
    const result = await chatSession.sendMessage(finalPrompt);
    setLoading(false);
    saveTrip(result?.response?.text());
  };

  const getUserData = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        generateTrip();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveTrip = async (tripData) => {
    setLoading(true);
    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(tripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  return (
    <div className="my-20 mb-20 px-6 lg:px-56">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">{CREATE_TRIP.title}</h2>
        <p className="text-lg text-gray-500">{CREATE_TRIP.titleDescription}</p>
        <div className="flex flex-col gap-10 mt-10">
          <div className="">
            <h3 className="text-xl my-3 font-medium">
              {CREATE_TRIP.destinantionLabel}
            </h3>
            <GooglePlacesAutocomplete
              className="rounded-ful"
              apiKey="AIzaSyCYJiw6Cf4JEQ_ybTzw9iXwBZOtKIKYl3s"
              selectProps={{
                place,
                onChange: (value) => {
                  setPlace(value);
                  handleInputChanges("location", value);
                },
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl my-3 font-medium ">
            {CREATE_TRIP.timeLineLabel}
          </h3>
          <input
            onChange={(e) => handleInputChanges("noOfDays", e.target.value)}
            className="border w-full p-2"
            placeholder="Ex.3"
            type="number"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium">
            {" "}
            {CREATE_TRIP.noOfPeopleLabel}
          </h3>
          <div className="flex lg:flex-row flex-col gap-6 mt-6">
            {SELECT_TRAVEL_LIST.map((listItem) => (
              <div
                onClick={() =>
                  handleInputChanges("noOfPeople", listItem.people)
                }
                className={`flex flex-col gap-2 shadow-md border rounded-md px-4 py-3 cursor-pointer 
                  ${
                    formData?.noOfPeople == listItem.people &&
                    "border-black transform scale-105 transition duration-100"
                  }
                  `}
                key={listItem.id}
              >
                <h2 className="text-2xl">{listItem.icon}</h2>
                <h3 className="text-xl font-semibold">{listItem.title}</h3>
                <p className="text-gray-500">{listItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium">{CREATE_TRIP.budgetLabel}</h3>
          <div className="flex lg:flex-row flex-col gap-6 mt-6">
            {SELECT_BUDGET_OPTIONS.map((listItem) => (
              <div
                onClick={() => handleInputChanges("budget", listItem.title)}
                className={`flex flex-col gap-2 shadow-md border rounded-md px-4 py-3 cursor-pointer
                  ${
                    formData?.budget == listItem.title &&
                    "border-black transform scale-105 transition duration-100"
                  }`}
                key={listItem.id}
              >
                <h2 className="text-2xl">{listItem.icon}</h2>
                <h3 className="text-xl font-semibold">{listItem.title}</h3>
                <p className="text-gray-500">{listItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            disabled={loading}
            className="px-5 py-2.5 rounded-lg bg-black text-white font-lg font-medium"
            onClick={generateTrip}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
            ) : (
              "Plan My Trip"
            )}
          </button>
          <Dialog open={openDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <img className="w-16" src={logo} alt="" />
                  <h2 className=" font-bold text-lg mt-4">
                    {CREATE_TRIP.signInLabel}
                  </h2>
                  <p className="mt-2">{CREATE_TRIP.signInDescription}</p>
                  <Button
                    onClick={login}
                    className="flex font-bold items-center gap-4 w-full mt-4"
                  >
                    {CREATE_TRIP.signInButtonLabel}{" "}
                    <FcGoogle className="w-7 h-7" />
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
