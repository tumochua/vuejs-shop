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
    // const labels = [
    //   "Janunary",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    // ];

    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: "My First Dataset",
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       borderColor: "rgb(75, 192, 192)",
    //       tension: 0.1,
    //     },
    //     {
    //       label: "My First Dataset",
    //       data: [12, 22, 10, 31, 35, 30, 60],
    //       fill: false,
    //       borderColor: "rgb(75, 192, 192)",
    //       tension: 0.1,
    //     },
    //   ],
    // };
    onMounted(() => {
      myChart.value = new Chart(myChart.value, {
        type: type,
        data: data,
        options: options ? options : "",
      });

      // myChart.destroy();
    });
    onBeforeMount(() => {});
    return { myChart };
  },
};
</script>