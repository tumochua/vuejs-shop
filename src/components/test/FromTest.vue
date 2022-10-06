<template>
  <div>
    <InputTest
      :value="inputData.email"
      name="password"
      @onChangeValue="onChangeInput"
    ></InputTest>
  </div>
</template>

<script>
import InputTest from "./InputTest.vue";
import { reactive } from "vue";
export default {
  name: "FromTest",
  components: {
    InputTest,
  },
  setup() {
    const inputData = reactive({
      email: "",
      password: "",
    });
    const onChangeInput = (data) => {
      inputData[data.name] = data.value;
    };
    return { inputData, onChangeInput };
  },
};
</script>

<style>
</style>