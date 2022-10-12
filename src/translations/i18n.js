import { createI18n } from "vue-i18n";
import vi from "./languages/vi.json";
import en from "./languages/en.json";
// import actions from "../store/actions";
import state from "../store/states";
// const language = localStorage.getItem("language");
const i18n = createI18n({
  locale: state.language,
  // locale: "vi",
  messages: {
    vi: vi,
    en: en,
  },
});
// console.log("check ", i18n.global.locale);
// console.log(actions.handleLanguage);
// const languages = (i18n.global.locale = handleLanguage);
// console.log("languages", languages);

// i18n.global.locale.value = "en";
// console.log(i18n.global.locale);

export default i18n;
