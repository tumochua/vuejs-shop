<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-indicators
        v-if="indicators"
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      ></carousel-indicators>
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      ></carousel-item>
      <carousel-controls
        v-if="controls"
        @prev="prev"
        @next="next"
      ></carousel-controls>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "CarouseVue",
  props: {
    slides: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    indicators: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  components: { CarouselItem, CarouselControls, CarouselIndicators },

  setup({ slides, interval }) {
    const currentSlide = ref(0);
    const slideInterval = ref(0);
    const direction = ref("right");
    function setCurrentSlide(index) {
      currentSlide.value = index;
    }
    function prev(step = -1) {
      const index =
        currentSlide.value > 0 ? currentSlide.value + step : slides.length - 1;
      setCurrentSlide(index);
      direction.value = "left";
      startSlideTimer();
    }
    function _next(step = 1) {
      const index =
        currentSlide.value < slides.length - 1 ? currentSlide.value + step : 0;
      setCurrentSlide(index);
      direction.value = "right";
    }
    function next(step = 1) {
      _next(step);
      startSlideTimer();
    }
    function startSlideTimer() {
      stopSlideTimer();
      slideInterval.value = setInterval(() => {
        _next();
      }, interval);
    }
    function stopSlideTimer() {
      clearInterval(slideInterval.value);
    }
    function switchSlide(index) {
      const step = index - currentSlide.value;
      if (step > 0) {
        next(step);
      } else {
        prev(step);
      }
    }
    onMounted(() => {
      startSlideTimer();
    });

    onBeforeUnmount(() => {
      stopSlideTimer();
    });
    return {
      currentSlide,
      slideInterval,
      direction,
      setCurrentSlide,
      prev,
      _next,
      next,
      startSlideTimer,
      stopSlideTimer,
      switchSlide,
    };
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
</style>
