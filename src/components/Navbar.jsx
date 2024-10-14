import { Button } from "./ui/button";
import EiRa from "../assets/EiRa1.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";

import { FcGoogle } from "react-icons/fc";
import useGetUserData from "../hooks/useGetUserData";
import { googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { openDialog, setOpenDailog, navigate, login } = useGetUserData();

  return (
    <div className="flex justify-between py-4 px-10 shadow-lg">
      <div className="flex items-center gap-3 lg:w-40">
        <Link to={"/"}>
          <img className="w-16" src={EiRa} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        {user ? (
          <div className="flex items-center gap-3">
            <Link
              to={"/create-trip"}
              className="bg-white text-black rounded-full border hover:bg-gray-100 lg:px-4 lg:py-2 lg:text-sm text-xs px-3 py-1.5 font-medium"
            >
              + Create Trips
            </Link>
            <Link
              to={"/my-trips"}
              className="bg-white text-black rounded-full border hover:bg-gray-100 lg:px-4 lg:py-2 lg:text-sm text-xs px-3 py-1.5 font-medium"
            >
              {" "}
              My Trips{" "}
            </Link>

            <Popover>
              <PopoverTrigger>
                {" "}
                <img
                  className="lg:w-9 lg:h-9 w-7 h-7 cursor-pointer rounded-full"
                  src={user?.picture}
                  alt="user-icon"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    navigate("/");
                  }}
                  className="cursor-pointer"
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            onClick={() => {
              setOpenDailog(true);
            }}
            className="cursor-pointer lg:px-10 px-6 lg:py-2 py-1.5 text-white font-medium rounded-full bg-[#21BCBE]"
          >
            Sign In
          </Button>
        )}
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img className="w-16" src={EiRa} alt="" />
              <h2 className=" font-bold text-lg mt-4">Sign In with Google</h2>
              <p className="mt-2">
                Sign in to the app with Google authentication securely
              </p>
              <Button
                onClick={login}
                className="flex font-bold items-center gap-4 w-full mt-4"
              >
                Sing in With Google <FcGoogle className="w-7 h-7" />
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
