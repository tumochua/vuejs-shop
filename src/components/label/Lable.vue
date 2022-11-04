<template>
  <label :style="{ fontSize: fontSize + 'rem' }">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "LabelVue",
  props: {
    fontSize: {
      type: Number,
      required: true,
      default() {
        return 1.3;
      },
    },
  },
  components: {},
  setup() {},
};
</script>

<style scoped lang="scss">
</style>