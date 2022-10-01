<template>
  <button
    class="btn"
    :class="{
      'btn-text-color': BtnTextColor,
    }"
    @click="onClick"
    :style="{ padding: padding + 'px', fontSize: fontSize + 'rem' }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    padding: {
      type: Number,
      required: true,
      default() {
        return 10;
      },
    },
    BtnTextColor: {
      type: Boolean,
    },
    fontSize: {
      type: Number,
      required: true,
      default() {
        return 12;
      },
    },
  },
  setup(_, { emit }) {
    const onClick = (e) => {
      e.preventDefault();
      emit("onClickEvent");
    };
    return { onClick };
  },
};
</script>

<style scoped lang="scss">
.btn {
  background-color: var(--btn-color);
  border: none;
  border-radius: 4px;
  // padding: 10px;
  cursor: pointer;
}
.btn-text-color {
  color: var(--text-color);
}
</style>