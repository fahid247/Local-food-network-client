import axios from "axios";


// Create a public Axios instance
const axiosPublic = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosPublic;
