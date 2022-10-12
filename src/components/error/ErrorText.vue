<template>
  <div>
    <span
      v-if="errorMessage"
      :class="{
        'f-12': fontSize,
        mb: isMb,
      }"
    >
      <slot></slot>
    </span>
  </div>
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
  margin: 3px 0;
  display: block;
  text-align: start;
  color: var(--colers);
}
.mb {
  margin-bottom: -8px;
}
</style>