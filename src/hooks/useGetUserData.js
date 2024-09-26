import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetUserData = () => {
    const [openDialog, setOpenDailog] = useState(false);

    const navigate = useNavigate();
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
  return {openDialog,setOpenDailog,navigate,login}
}

export default useGetUserData