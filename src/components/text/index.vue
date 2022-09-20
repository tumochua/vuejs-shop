<template>
  <p :style="handleStyle">
    <slot></slot>
  </p>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "TextVue",
  props: {
    fontSize: {
      type: Number,
      required: true,
      default() {
        return 12;
      },
    },
  },
  setup({ fontSize }) {
    const handleStyle = reactive({
      fontSize: fontSize + "px",
      //   fontSize: "20px",
      //   fontSize: fontSize + "px",
    });
    return { handleStyle };
  },
};
</script>

<style scoped lang="scss">
</style>