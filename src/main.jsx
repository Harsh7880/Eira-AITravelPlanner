import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./components/CreateTrip.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./components/ViewTrip.jsx";
import MyTrips from "./components/MyTrips.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(

    <GoogleOAuthProvider clientId="298911721929-2jrbeua2j01vbqkks8dc8f5dljacekrq.apps.googleusercontent.com">
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/view-trip/:tripId" element={<ViewTrip />} />
          <Route path="/my-trips" element={<MyTrips />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  
);
