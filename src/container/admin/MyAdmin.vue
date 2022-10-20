<template>
  <h1>MyAdmin</h1>
</template>

<script>
import { onMounted } from "vue";
import { handleAuthAdmin } from "../../api/index";
export default {
  name: "MyAdmin",
  setup() {
    onMounted(async () => {
      const userAdmin = await handleAuthAdmin();
      console.log("Check userAdmin", userAdmin);
    });
  },
};
</script>

<style>
</style>