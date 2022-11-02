<template>
  <select
    id="cars"
    class="select__wapper"
    :class="{ 'full-width': width }"
    @change="onChangeSelect"
  >
    <option :value="value">
      {{ value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    width: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    name: {
      type: String,
    },
    datas: {
      type: String,
    },
  },
  setup({ name, value }, { emit }) {
    console.log("value", value);
    const onChangeSelect = (e) => {
      emit("onChangeValue", { name: name, value: e.target.value });
    };
    return { onChangeSelect };
  },
};
</script>

<style scoped lang="scss">
.select__wapper {
  display: block;
  margin-top: 3px;
  padding: 8px 12px;
  outline: none;
}
.full-width {
  width: 100%;
}
</style>