<template>
  <span
    v-if="errorMessage"
    :class="{
      'f-12': fontSize,
      mb: isMb,
    }"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "ErrorTextVue",
  props: {
    fontSize: {
      type: Boolean,
    },
    errorMessage: {
      type: Boolean,
    },
    isMb: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.f-12 {
  font-size: 1.2rem;
  margin-left: 4px;
  display: block;
  text-align: start;
  margin-top: -8px;
  color: var(--colers);
  /* border: 1px solid var(--colers); */
}
.mb {
  margin-bottom: -8px;
}
</style>