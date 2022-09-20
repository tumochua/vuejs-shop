<template>
  <div
    class="model-ctn"
    :class="{
      headerNotifyGrowth: customModel.animation,
      header__notify: customModel.afterBorder,
      custom__position: position,
    }"
    :style="{ width: width + 'px' }"
  >
    header qr
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
export default {
  name: "ModelsVue",
  props: {
    customModel: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    width: {
      type: Number,
      required: true,
      default() {
        return 444;
      },
    },
    position: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },
  // setup({ position }) {
  //   const handlePosition = computed(() => {
  //     if (position) {
  //       return;
  //     }
  //   });
  //   return { handlePosition };
  // },
};
</script>

<style lang="scss" scoped>
.model-ctn {
  z-index: 2;
  width: 444px;
  height: 100px;
  background-color: var(--white-color);
  padding: 3px;
  border-radius: 3px;
  position: absolute;
  margin-top: 6px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.header__notify::before {
  content: "";
  border-width: 9px 12px;
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  position: absolute;
  right: 30px;
  top: -17px;
}
.headerNotifyGrowth {
  animation: headerNotifyGrowth ease-in 0.3s;
}
.custom__position {
  // left: 0;
  // right: 8%;
  // margin-left: auto;
  // margin-right: auto;
  margin-top: 14px;
  right: -100%;
}
@keyframes headerNotifyGrowth {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>