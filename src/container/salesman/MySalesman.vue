<template>
  <h1>MySalesman</h1>
</template>

<script>
import { onMounted } from "vue";
import { handleAuthSalesman } from "@/api/index";
export default {
  name: "MySalesman",
  setup() {
    onMounted(async () => {
      const Salesman = await handleAuthSalesman();
      console.log("Check handleAuthSalesman", Salesman);
    });
  },
};
</script>

<style>
</style>