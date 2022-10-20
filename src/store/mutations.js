import i18n from "@/translations/i18n";
// import { useRoute } from "vue-router";
// const router = useRoute();
const mutations = {
  increte(state) {
    state.couter++;
  },
  handleLanguage(state) {
    let result =
      state.language === "vi"
        ? (state.language = "en")
        : (state.language = "vi");
    i18n.global.locale = result;
  },
  handleRegister(state, payload) {
    state.usersRegister = payload;
    // router.push("/login");
    // console.log("check state vuex", state.usersRegister);
  },
  handleToastMessage(state, payload) {
    state.usersRegisterError = payload;
    // console.log("check state vuex", state.usersRegisterError);
  },
  handleIsErrorToast(state) {
    state.isErrorToast = true;
  },
  handleAuthLogin(state, payload) {
    state.usersLogin = payload;
  },
  handleSetUserError(state, payload) {
    state.userLoginError = payload;
  },
  handleLogOut(state) {
    state.isLogout = true;
  },
};

export default mutations;
