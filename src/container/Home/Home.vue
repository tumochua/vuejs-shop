<template>
  <div>
    <HeaderVue></HeaderVue>
    <div class="grid">
      <Carousel
        :slides="slideseft"
        :interval="3000"
        controls
        indicators
        :slideRight="slideRight"
      ></Carousel>
    </div>
    <MyBodyVue class="body-container grid" />
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import Carousel from "@/components/slick/Carousel.vue";
import HeaderVue from "@/container/Header/Header.vue";
import FooterVue from "@/container/footer/Footer.vue";
import MyBodyVue from "../body/MyBody.vue";
import { reactive, onMounted } from "vue";
export default {
  name: "HomeVue",
  components: {
    Carousel,
    HeaderVue,
    FooterVue,
    MyBodyVue,
  },
  setup() {
    const slideseft = reactive([
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ]);
    const slideRight = reactive([
      {
        id: 1,
        img: "https://cf.shopee.vn/file/e56e59416406a49ed50580f5fb23aae0_xhdpi",
      },
      {
        id: 2,
        img: "https://cf.shopee.vn/file/c2f6aeffe1f87e3728727009f7fc52d4_xhdpi",
      },
    ]);

    onMounted(() => {
      // console.log("onMounted home");
    });

    return { slideseft, slideRight };
  },
};
</script>

<style scoped lang="scss">
.grid {
  margin-top: 30px;
}
.body-container {
  border-top: 4px solid var(--colers);
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
