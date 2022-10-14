<template>
  <div>
    <LabelVue>tiitle</LabelVue><br />
    <input :value="value" @input="onChangeValue" /><br />
    <ErrorText :errorMessage="true">Error</ErrorText>
  </div>
</template>

<script>
import LabelVue from "../label/Lable.vue";
import ErrorText from "../error/ErrorText.vue";
// import { handleValidation } from "../../helper/constants";
export default {
  name: "BaseInput",
  components: {
    LabelVue,
    ErrorText,
  },
  props: {
    name: {
      type: String,
      default() {
        return "text";
      },
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    isRequire: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isLength: {
      type: Number,
    },
  },
  setup({ name }, { emit }) {
    // function handeValidation(data) {
    //   if (isRequire) {
    //     if (data.trim() === 0) {
    //       return {
    //         status: true,
    //         message: "trường này là bắt buộc",
    //       };
    //     } else {
    //       return {
    //         message: "succ",
    //       };
    //     }
    //   }
    // }
    const onChangeValue = (e) => {
      const value = e.target.value;
      //   let dataInput = handeValidation(value);
      //   console.log("dataInput", dataInput);
      emit("onChangeValue", { name: name, value: value });
      // emit("onChangeValue");
    };

    return {
      onChangeValue,
    };
  },
};
</script>

<style>
</style>