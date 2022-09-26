<template>
  <div>
    <input
      class="base__input"
      :placeholder="placeholder"
      :value="value"
      @input="onChangeValue"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "InputVue",
  components: {},
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
    type: {
      type: String,
      default() {
        return "text";
      },
    },
  },
  setup({ name }, { emit }) {
    const onChangeValue = (e) => {
      // emit("onChangeValue");
      emit("onChangeValue", { name: name, value: e.target.value });
    };
    return { onChangeValue };
  },
};
</script>

<style scoped lang="scss">
.base__input {
  padding: 12px;
  border: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  box-shadow: rgba 0 2px 0 (0 0 0/2%);
  width: 100%;
}
</style> 