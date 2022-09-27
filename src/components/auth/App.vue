<template>
  <div class="app__wapper">
    <i class="fa-brands fa-apple app__icon"></i>
    <SpanVue :fontSize="1.4">App</SpanVue>
  </div>
</template>

<script>
import SpanVue from "../span/Span.vue";
export default {
  name: "AppVue",
  components: {
    SpanVue,
  },
};
</script>


<style scoped lang="scss">
.app__wapper {
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  height: 44px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 2px;
  .app__icon {
    font-size: 22px;
    margin-right: 7px;
  }
}
</style>