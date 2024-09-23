import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SELECT_TRAVEL_LIST, SELECT_BUDGET_OPTIONS, GENERATE_TRIP_PROMPT } from "../utils/constants";
import toast from "react-hot-toast";
import { chatSession } from "../service/aiModel";
const CreateTrip = () => {

  const [place,setPlace] = useState();
  const [formData,setFormData] = useState([])

  const handleInputChanges =  (name,value) =>{
    setFormData({
      ...formData,
      [name]: value
    })

  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const generateTrip = async () =>{
    if(formData?.noOfDays>10 ){
      toast.error("Please plan a trip less than 10 days")

    }
    if(!formData?.location || !formData?.noOfPeople || !formData?.budget ){
      toast.error("Please fill the necessary details.")
      return;
    }
    const finalPrompt = GENERATE_TRIP_PROMPT
    .replace('{location}', formData?.location.lable)
    .replace('{noOfDays}', formData?.noOfDays)
    .replace('{noOfPeople}', formData?.noOfPeople)
    .replace('{budget}', formData?.budget)
    .replace('{noOfDays}', formData?.noOfDays)

    console.log(finalPrompt);
    const result = await chatSession.sendMessage(finalPrompt);
 
    console.log(result.response.text());
  }
  return (
    <div className="my-10 mb-20 px-6 lg:px-56">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-bold">
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className="text-sm text-gray-500">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your prefrences
        </p>
        <div className="flex flex-col gap-10 mt-10">
          <div className="">
            <h3 className="text-xl my-3 font-medium">
              What is destination of choice?{" "}
            </h3>
            <GooglePlacesAutocomplete
              apiKey="AIzaSyCYJiw6Cf4JEQ_ybTzw9iXwBZOtKIKYl3s"
              selectProps={{
                place,
                  onChange: (value) => {
                  setPlace(value);
                  handleInputChanges('location', value);
                },
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl my-3 font-medium ">
            How many days are you planning your trip ?
          </h3>
          <input
            onChange={(e) => handleInputChanges('noOfDays', e.target.value)}
            className="border w-full p-2"
            placeholder="Ex.3"
            type="number"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium">
            {" "}
            Who do you plan on traveling with on your next adventure?
          </h3>
          <div className="flex gap-6 mt-6">
            {SELECT_TRAVEL_LIST.map((listItem) => (
              <div
                
                onClick={() => handleInputChanges('noOfPeople',listItem.people)}
                className={`flex flex-col gap-2 shadow-md border rounded-md px-4 py-3 cursor-pointer 
                  ${formData?.noOfPeople==listItem.people&&'border-black transform scale-105 transition duration-100'}
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
          <h3 className="text-xl font-medium">What is Your Budget?</h3>
          <div className="flex gap-6 mt-6">
            {SELECT_BUDGET_OPTIONS.map((listItem) => (
              <div
              onClick={() => handleInputChanges('budget',listItem.title)}
                className={`flex flex-col gap-2 shadow-md border rounded-md px-4 py-3 cursor-pointer
                  ${formData?.budget==listItem.title&&'border-black transform scale-105 transition duration-100'}`}
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
          <button className="px-5 py-2.5 rounded-lg bg-black text-white font-lg font-medium"
          onClick={generateTrip}
          >
            Generate Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip