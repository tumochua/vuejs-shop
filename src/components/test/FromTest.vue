<template>
  <div>
    <InputTest
      :value="inputData.email"
      name="password"
      @onChangeValue="onChangeInput"
      :handleValidateForm="handleValidateForm"
    ></InputTest>
  </div>
</template>

<script>
import InputTest from "./InputTest.vue";
import { reactive } from "vue";
import { handleValidateForm } from "@/helper/constants";
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
    return { inputData, onChangeInput, handleValidateForm };
  },
};
</script>

<style>
</style>