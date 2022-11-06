<template>
  <span
    :class="{
      coler: coler,
    }"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "SpanVue",
  props: {
    fontSize: {
      type: Number,
      required: true,
      default() {
        return 1.2;
      },
    },
    coler: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss">
.coler {
  color: var(--colers);
  font-size: 1.2rem;
}
</style>