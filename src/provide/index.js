import { reactive, readonly } from "vue";
const state = reactive({
  name: "tumochua",
});
const chanName = () => {
  state.name = "nguyễn văn tú";
};
export default { state: readonly(state), chanName };
