import { createStore } from "vuex";
import states from "./states.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return states;
  },
  getters,
  actions,
  mutations,
});

export default store;
