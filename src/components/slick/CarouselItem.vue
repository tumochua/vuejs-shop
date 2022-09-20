<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
      @mouseover="handleShowHideBtn"
    >
      <img :src="slide" />
    </div>
  </transition>
</template>

<script>
import { computed } from "vue";
export default {
  emits: ["mouseenter", "mouseout", "onHandleShowHideBtn"],
  props: ["slide", "currentSlide", "index", "direction"],
  setup({ direction }, { emit }) {
    const transitionEffect = computed(() => {
      return direction === "right" ? "slide-out" : "slide-in";
    });
    const handleShowHideBtn = () => {
      emit("onHandleShowHideBtn");
    };
    return { transitionEffect, handleShowHideBtn };
  },
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
