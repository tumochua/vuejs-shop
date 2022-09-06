<template>
  <div>
    <header-vue></header-vue>
    <h1>Detail Page</h1>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import router from "@/router";
import HeaderVue from "@/container/Header/index.vue";
import FooterVue from "@/container/footer/Footer.vue";
export default {
  name: "DetailVue",
  components: {
    HeaderVue,
    FooterVue,
  },
  setup() {
    console.log(router.currentRoute._value);
  },
};
</script>

<style>
</style>