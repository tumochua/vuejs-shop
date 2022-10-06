import Cookies from "js-cookie";
import { handleLogin } from "../api/index";

const actions = {
  increte({ commit }) {
    commit("increte");
  },
  handleLanguage({ commit }) {
    commit("handleLanguage");
  },
  async handleAuthLogin({ commit }, payload) {
    let users = await handleLogin(payload);
    if (users.data.token) {
      Cookies.set("token", users.data.token);
    }
    const user = users.data.data.data;
    if (user) {
      commit("handleAuthLogin", user);
    } else {
      const userError = users.data;
      commit("handleSetUserError", userError);
    }
    // console.log("users", user);
  },
};

export default actions;
