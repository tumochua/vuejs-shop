<template>
  <canvas ref="myChart" :width="width" :height="height"></canvas>
</template>
  
  <script>
import { onMounted, onBeforeMount, ref } from "vue";

import Chart from "chart.js/auto";

export default {
  name: "MyChart",
  components: {},
  props: {
    width: {
      type: Number,
      default() {
        return 350;
      },
    },
    height: {
      type: Number,
      default() {
        return 210;
      },
    },
    data: {
      type: Object,
    },
    type: {
      type: String,
      default() {
        return "line";
      },
    },
    options: {
      type: String,
    },
  },

  setup({ data, type, options }) {
    const myChart = ref(null);

    onMounted(() => {
      myChart.value = new Chart(myChart.value, {
        type: type,
        data: data,
        options: options ? options : "",
      });
    });
    onBeforeMount(() => {});
    return { myChart };
  },
};
</script>