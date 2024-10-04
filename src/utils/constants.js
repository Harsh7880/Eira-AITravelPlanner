export const HERO = {
  title: " Hi, I'm Eira, your personal travel agent",
  titleDescription:
    " Get custom travel plans that match your style, interests, and budget. Explore destinations and experiences just for you.",
  buttonLable: "Start Planning Your Trip for Free",
};

export const ABOUT_TEXT = {
  title: "Plan smarter, travel better with AI",
  buttonLable: "Plan a new trip",
  description:
    " Meet Eira, your personal AI travel companion. From must-see destinations to perfect stays, flights, and road trips, she’s here to make vacation planning a breeze. With Eira, forget the chaos of managing multiple tabs and apps—this is the only travel tool you’ll need. Simply ask Eira for personalized destination ideas and let her craft the perfect itinerary tailored to your style and budget. Discover exclusive content from travel experts you’ll love, and watch as your customized travel plan takes shape, ensuring every moment of your trip is unforgettable.",
};

export const TESTIMONIALS = {
  title: "Sweet Words from Happy Travelers about Eira",
  review1:
    "Eira transformed my travel planning! The insights were spot-on, and the itineraries were perfectly tailored to my preferences. I loved the engaging videos and reels!",
  review2:
    "This is the ultimate trip planner! Eira provided a wealth of information and crafted an itinerary that exceeded my expectations. The visual content was a delightful bonus!",
  review3:
    "I can't recommend Eira enough! The trip planning process was seamless, and the itineraries were packed with useful details. The videos made it even more exciting!",
  review4:
    "Eira is a game-changer for travelers! The personalized itineraries were fantastic, and the amount of helpful information available was impressive. Loved the creative videos!",
  review5:
    "Planning my vacation was a breeze with Eira! The itineraries were fantastic and tailored just for me. Plus, the engaging video content kept me inspired!",
};

export const CREATE_TRIP = {
  title: "Ready for your next great escape? 🌅✈️",
  titleDescription:
    "Tell us your dream destination, and let us plan your perfect getaway.",
  destinantionLabel: "What is destination of choice?",
  timeLineLabel: "Set Your Travel Timeline",
  noOfPeopleLabel: "Who Are You Traveling With ?",
  budgetLabel: "What is Your Budget?",
  signInLabel: "Sign In with Google",
  signInDescription: "Sign in to the app with Google authentication securely",
  noOfDaysError: "Please plan a trip less than 10 days",
  fillAllTheDeatilsError: "Please fill the necessary details.",
  noOfDays: "{noOfDays}",
  noOfPeople: "{noOfPeople}",
  budget: "{budget}",
};
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
  "Generate Travel Plan for Location : {location}, for {noOfDays} Days for {noOfPeople} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel for each of the location for {noOfDays} with each day plan with best time to visit in JSON format and itinerary in Array format";
export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=2000&maxWidthPx=2000&key=AIzaSyCYJiw6Cf4JEQ_ybTzw9iXwBZOtKIKYl3s";

export const FOOTER_DESCRIPTION = "© 2024 All right reserved by Eira";
