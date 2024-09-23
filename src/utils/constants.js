export const SELECT_TRAVEL_LIST = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "A sole traveles in exploration",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A Group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "👯‍♂️",
    people: "more than 5 People",
  },
];

export const SELECT_BUDGET_OPTIONS = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of cost",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about the cost",
    icon: "💸",
  },
];

export const GENERATE_TRIP_PROMPT =
  "Generate Travel Plan for Location : {location}, for {noOfDays} Days for {noOfPeople} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {noOfDays} with each day plan with best time to visit in JSON format.";
