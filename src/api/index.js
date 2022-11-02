import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    // Authorization: "Bearer " + "TUMOCHUA",
  },
});
// axios.defaults.headers.common['token'] = headers.token;
const getHome = () => {
  return api.get("/home");
};
const handleApiRegister = (inforUse) => {
  return api.post("/register", inforUse);
};
const handleLogin = (user) => {
  return api.post("/login", user);
};
// const handleCheckAdmin = () => {
//   return api.get("/admin");
// };
const handleCheckPrivate = () => {
  return api.get("/private");
};
const handleAuthAdmin = () => {
  return api.get("/admin");
};
const handleAuShipper = () => {
  return api.get("/shipper");
};
const handleAuthSalesman = () => {
  return api.get("/salesman");
};
const handleGetAllUsers = () => {
  return api.get("/get-all-users");
};
const handleGetPagingListUsers = (id) => {
  // console.log(id);
  const isId = id ? id : 1;
  return api.get(`/users?page=${isId}`);
};
const handleDeleteUser = (userId) => {
  return api.delete(`/delete-user`, {
    data: {
      id: userId,
    },
  });
};

const handleApiEditUser = (data) => {
  return api.put("/edit-user", data);
};
const handleGetDetailUser = (userId) => {
  return api.get(`/get-user-detail-by-id?userId=${userId}`);
};

export {
  getHome,
  handleApiRegister,
  handleLogin,
  // handleCheckAdmin,
  handleCheckPrivate,
  handleAuthAdmin,
  handleAuShipper,
  handleAuthSalesman,
  handleGetAllUsers,
  handleGetPagingListUsers,
  handleDeleteUser,
  handleApiEditUser,
  handleGetDetailUser,
};
