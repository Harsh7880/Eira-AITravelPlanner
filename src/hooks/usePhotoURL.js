import { useState, useEffect } from "react";
import { GetPlaceDetail } from "../service/GlobalAPI";
import {PHOTO_REF_URL} from '../utils/constants'

export const usePlacePhoto = (trip,data) => {
  const [photoURL, setPhotoURL] = useState();

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
   
    await GetPlaceDetail(data).then((res) => {
      const photoUrl = PHOTO_REF_URL.replace("{NAME}", res?.data?.places[0]?.photos[6]?.name);
      setPhotoURL(photoUrl);
    });
  };

  return photoURL;
};
