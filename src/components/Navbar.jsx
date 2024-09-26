import logo from "../assets/logo.svg";
import { Button } from "./ui/button";
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
      <div className="flex w-40">
        <Link to={"/"}>
          <img className="w-full" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        {user ? (
          <div className="flex items-center gap-3">
            <Link
              to={"/create-trip"}
              className="bg-white text-black rounded-full border hover:bg-gray-100 px-4 py-2 text-sm font-medium"
            >
              + Create Trips
            </Link>
            <Link
              to={"/my-trips"}
              className="bg-white text-black rounded-full border hover:bg-gray-100 px-4 py-2 text-sm font-medium"
            >
              {" "}
              My Trips{" "}
            </Link>

            <Popover>
              <PopoverTrigger>
                {" "}
                <img
                  className="w-9 h-9 cursor-pointer rounded-full"
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
            className="cursor-pointer px-10 py-2 text-white font-medium rounded-full bg-[#7B68EE]"
          >
            Sign In
          </Button>
        )}
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img className="w-28" src={logo} alt="" />
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
