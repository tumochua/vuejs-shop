<template>
  <h1>private</h1>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "PrivateVue",
  setup() {
    onMounted(() => {
      console.log("onMounted private");
    });
  },
};
</script>

<style>
</style>