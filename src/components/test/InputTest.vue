<template>
  <div>
    <input
      :value="value"
      @input="onChangeValue"
      :hanldeCheckType="hanldeCheckType"
    />
    <i
      v-if="handleCheckPassword"
      :class="showHidePassword"
      @click="HandleShoHidePasworld"
    ></i>
    <!-- <i
      v-else
      class="fa-solid fa-eye login__pasworld-icon"
      @click="HandleShoHidePasworld"
    ></i> -->
  </div>
</template>

<script>
import { watch, computed, ref } from "vue";
export default {
  name: "InputTest",
  props: {
    value: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  setup({ name }, { emit }) {
    const isPassword = ref(false);
    watch(() => {});
    const onChangeValue = (e) => {
      emit("onChangeValue", { name: name, value: e.target.value });
    };
    const handleCheckPassword = computed(() => {
      return name === "password" ? true : false;
    });
    const showHidePassword = computed(() => {
      return isPassword.value ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
    });
    const hanldeCheckType = computed(() => {
      return "";
    });

    return {
      onChangeValue,
      hanldeCheckType,
      handleCheckPassword,
      showHidePassword,
      isPassword,
    };
  },
};
</script>

<style>
</style>