<template>
  <div class="google__wapper">
    <i class="fa-brands fa-google facebook__icon"></i>
    <SpanVue class="google">Google</SpanVue>
  </div>
</template>

<script>
import SpanVue from "../span/Span.vue";
export default {
  name: "GoogleVue",
  computed: {
    SpanVue,
  },
};
</script>

<style scoped lang="scss">
.google__wapper {
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  height: 44px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 2px;
  .facebook__icon {
    font-size: 22px;
    margin-right: 5px;
    color: var(--colers);
  }
  .google {
    font-size: 14px;
  }
}
</style>