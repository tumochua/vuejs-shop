<template>
  <div v-if="isshow">
    <h1>MyModel</h1>
  </div>
</template>

<script>
export default {
  name: "MyModel",
  props: {
    isshow: {
      type: Boolean,
    },
  },
  setup() {},
};
</script>

<style>
</style>