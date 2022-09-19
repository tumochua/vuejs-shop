<template>
  <div>
    <Carousel :slides="slides" :interval="3000" controls indicators></Carousel>
  </div>
</template>

<script>
import Carousel from "@/components/slick/Carousel.vue";
import { reactive } from "vue";
export default {
  name: "HomeContent",
  components: {
    Carousel,
  },
  setup() {
    const slides = reactive([
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ]);
    return { slides };
  },
};
</script>

<style>
</style>