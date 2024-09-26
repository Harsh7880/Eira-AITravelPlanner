import axios from "axios";

const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': 'AIzaSyCYJiw6Cf4JEQ_ybTzw9iXwBZOtKIKYl3s',
    'X-Goog-FieldMask': ['places.displayName','places.photos','places.id']
  }   
}

export const GetPlaceDetail= (data) => axios.post(BASE_URL,data,config);