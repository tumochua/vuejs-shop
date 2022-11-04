<template>
  <button
    class="btn"
    :class="{
      'btn-text-color': BtnTextColor,
      'btn-text-white': white,
      'btn--filled--primary': primary,
      'btn--filled--red': red,
      'btn-style-padding': padding,
    }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    BtnTextColor: {
      type: Boolean,
    },

    primary: {
      type: Boolean,
    },
    red: {
      type: Boolean,
    },
    padding: {
      type: Boolean,
    },
    white: {
      type: Boolean,
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
  padding: 10px 14px;
  cursor: pointer;
}
.btn-text-color {
  color: var(--text-color);
}
.btn-text-white {
  color: var(--white-color);
}
.btn--filled--primary {
  background: rgb(45, 164, 79);
}
.btn--filled--red {
  background-color: #f44336;
}
.btn-style-padding {
  padding: 13px 30px;
}
</style>