<template>
  <div class="earning__wapper">
    <div class="earning__wapper-left">
      <MyChart
        type="doughnut"
        :data="data"
        :width="174"
        :height="100"
      ></MyChart>
    </div>
    <div class="earning__wapper-right">
      <MyChart :data="datas" :options="options"></MyChart>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import MyChart from "./MyChart.vue";
export default {
  name: "MyEarnings",
  components: { MyChart },

  setup() {
    const data = reactive({
      datasets: [
        {
          label: ["Red", "Blue", "Yellow"],
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 205, 86)",
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    });

    const labels = reactive([
      "Janunary",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ]);
    const datas = reactive({
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: ["rgba(19, 247, 228,1)"],
          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          borderWidth: 3,
          tension: 0.1,
        },
      ],
    });

    const options = reactive({
      chartArea: {
        backgroundColor: "rgba(251, 85, 85, 0.4)",
      },
    });

    return { data, datas, options };
  },
};
</script>

<style scoped lang="scss">
.earning__wapper {
  display: flex;
  gap: 14px;
  .earning__wapper-left {
    width: 30%;
    background: #30313a;
  }
  .earning__wapper-right {
    width: 70%;
    background: #30313a;
    // background: rgba(75, 192, 192, 0.2);
  }
}
</style>