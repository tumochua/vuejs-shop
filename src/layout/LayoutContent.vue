<template>
  <div>
    <slot name="header"></slot>
    <main class="wrap-content">
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<script>
// import HomeVue from "@/views/Home/index.vue";
export default {
  name: "indexLayout",
  components: {
    // HomeVue,
  },
  setup() {},
};
</script>

<style>
</style>