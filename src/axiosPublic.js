import axios from "axios";


// Create a public Axios instance
const axiosPublic = axios.create({
  baseURL: "https://local-foods.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosPublic;
