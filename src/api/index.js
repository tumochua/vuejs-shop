import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

const getHome = () => {
  return api.get("/home");
};
const handleApiRegister = (inforUse) => {
  return api.post("/register", inforUse);
};
export { getHome, handleApiRegister };
