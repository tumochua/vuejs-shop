<template>
  <div class="facebook__wapper">
    <i class="fa-brands fa-facebook facebook__icon"></i>
    <SpanVue :fontSize="1.4">Facebook</SpanVue>
  </div>
</template>

<script>
import SpanVue from "../span/Span.vue";
export default {
  name: "FaceBook",
  components: {
    SpanVue,
  },
};
</script>

<style scoped lang="scss">
.facebook__wapper {
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
    color: blue;
  }
}
</style>