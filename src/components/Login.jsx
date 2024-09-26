import { Dialog, DialogContent, DialogDescription, DialogHeader} from "./ui/dialog";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [openDialog, setOpenDailog] = useState(false);
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => getUserData(tokenResponse),
    onError: (tokenResponse) => console.log(tokenResponse),
  });
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
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Dialog open={openDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <img className="w-28" src={logo} alt="" />
                  <h2 className=" font-bold text-lg mt-4">
                    Sign In with Google
                  </h2>
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
  )
}

export default Login