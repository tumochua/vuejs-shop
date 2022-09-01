<template>
  <div class="model-ctn" v-if="isShow">
    header qr
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ModelsVue",
  props: {
    isShow: Boolean,
  },
  setup(props) {
    console.log("check props ", props);
    const widthStyle = computed(() => {
      return `${props.widthProps}px`;
    });
    return { widthStyle };
  },
};
</script>

<style lang="scss" scoped>
.model-ctn {
  z-index: 2;
  width: 183px;
  background: violet;
}
</style>