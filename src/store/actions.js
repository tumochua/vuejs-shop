import Cookies from "js-cookie";
import { handleLogin, handleApiRegister } from "../api/index";

const actions = {
  increte({ commit }) {
    commit("increte");
  },
  handleLanguage({ commit }) {
    commit("handleLanguage");
  },
  async handleRegister({ commit }, payload) {
    try {
      let users = await handleApiRegister(payload);
      console.log("check users", users.data.data);
      const checkUser = users.data.data;
      if (checkUser.errorCode === 2) {
        commit("handleRegister", checkUser);
        commit("handleToastMessage", checkUser);
      } else {
        // console.log("check checkUser", checkUser.message);
        commit("handleToastMessage", checkUser);
      }
    } catch (error) {
      commit("handleIsErrorToast");
      console.log("check error", error);
    }
  },
  async handleAuthLogin({ commit }, payload) {
    try {
      let users = await handleLogin(payload);
      console.log("check user login", users);
      if (users.data.token) {
        Cookies.set("token", users.data.token);
      }
      const user = users.data.data.data;
      if (user) {
        commit("handleAuthLogin", user);
      } else {
        const userLoginError = users.data;
        commit("handleSetUserError", userLoginError);
      }
    } catch (error) {
      console.log("check error", error);
    }

    // console.log("users", user);
  },
};

export default actions;
