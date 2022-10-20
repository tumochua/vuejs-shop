<template>
  <h1>private</h1>
</template>

<script>
import { onMounted } from "vue";
import { handleCheckPrivate } from "../../api/index";
export default {
  name: "PrivateVue",
  setup() {
    onMounted(async () => {
      try {
        const data = await handleCheckPrivate();
        console.log("check data", data);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>

<style>
</style>