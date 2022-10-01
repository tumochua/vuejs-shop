<template>
  <div class="carose__nav-ctn grid">
    <div v-for="carouselNavbar in carouselNavbars" :key="carouselNavbar.id">
      <div class="carose__nav-item">
        <div class="carose__nav-item--img-wapper">
          <img :src="carouselNavbar.img" class="carose__nav-item--img" />
        </div>
        <p class="carose__nav-item-text">{{ carouselNavbar.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselNavbar",
  props: {
    carouselNavbars: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {},
};
</script>

<style scoped lang="scss">
.carose__nav-ctn {
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  .carose__nav-item {
    width: 100px;
    &:hover {
      transform: translateY(-0.0625rem);
      cursor: pointer;
    }
    .carose__nav-item--img-wapper {
      text-align: center;
      .carose__nav-item--img {
        width: 45px;
        height: 45px;
        margin: 0 auto;
      }
    }
    .carose__nav-item-text {
      text-align: center;
      font-size: 1.3rem;
    }
  }
}
</style>