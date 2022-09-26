<template>
  <!-- in vue 2.x you need wrap these buttons in a div -->
  <div>
    <button class="carousel-control left" @click="$emit('prev')">
      <i class="fa-solid fa-circle-arrow-left carousel__icon"></i>
    </button>
    <button class="carousel-control right" @click="$emit('next')">
      <i class="fa-solid fa-circle-arrow-right carousel__icon"></i>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["prev", "next"], // vue v3
  props: {
    // showHideBtn: {
    //   type: Boolean,
    //   default() {
    //     return false;
    //   },
    // },
  },
  setup() {},
};
</script>
<style scoped lang="scss">
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 35px;
  width: 50px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  .carousel__icon {
    font-size: 20px;
  }
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
