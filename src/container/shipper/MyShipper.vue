<template>
  <h1>MyShipper</h1>
</template>

<script>
import { onMounted } from "vue";
import { handleAuShipper } from "../../api/index";
export default {
  name: "MyShipper",
  setup() {
    onMounted(async () => {
      const userShipper = await handleAuShipper();
      console.log("Check handleAuShipper", userShipper);
    });
  },
};
</script>

<style>
</style>