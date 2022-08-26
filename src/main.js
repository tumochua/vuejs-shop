import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
import provideVue from "./provide/index.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.provide("storeProvide", provideVue);
app.mount("#app");
