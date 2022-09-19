<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <!-- <div v-for="slick in slicks" :key="slick.id">
        <img :src="slick.img" />
      </div> -->
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { reactive } from "vue";

export default {
  name: "VueSlick",
  components: {
    VueSlickCarousel,
  },
  setup() {
    const slicks = reactive([
      {
        id: 1,
        img: "https://cf.shopee.vn/file/41dd8a06f3911bd1f378c6275f27a001_xxhdpi",
      },
      {
        id: 2,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_1.jpg",
      },
      {
        id: 3,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_2.jpg",
      },
      {
        id: 4,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_3.jpg",
      },
      {
        id: 5,
        img: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban_3.jpg",
      },
    ]);
    const settings = reactive({
      dots: true,
      dotsClass: "slick-dots custom-dot-class",
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    return { slicks, settings };
  },
};
</script>

<style>
</style>