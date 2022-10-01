import i18n from "@/translations/i18n";

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
};

export default mutations;
