<template>
  <span
    :style="{ fontSize: fontSize + 'rem' }"
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
        return 1;
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
}
</style>