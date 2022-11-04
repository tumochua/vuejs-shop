<template>
  <select
    id="cars"
    class="select__wapper"
    :class="{ 'full-width': width }"
    @change="onChangeSelect"
  >
    <option v-for="data in datas" :key="data" :value="data.value">
      {{ data.name }}
    </option>
  </select>
</template>

<script>
import { computed } from "vue";
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
    const onChangeSelect = (e) => {
      emit("onChangeValue", { name: name, value: e.target.value });
    };

    const isValue = computed(() => {
      return !value ? "" : value;
    });

    return { onChangeSelect, isValue };
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