<template>
  <div class="earning__wapper">
    <div class="earning__wapper-left">
      <div class="earning__wapper-left-top">
        <div class="earning__wapper-left-top--title">Earnings</div>
        <p class="earning__wapper-left-top--total">Total Expense</p>
        <h1 class="earning__wapper-left-top--sales">$6078.76</h1>
        <p class="earning__wapper-left-top--profit">
          Profit is 48% More than last Month
        </p>
      </div>
      <MyChart
        type="doughnut"
        :data="data"
        :width="80"
        :height="80"
        :option="option"
      ></MyChart>
    </div>
    <div class="earning__wapper-right">
      <div class="earning__wapper-right-wapper--top">
        <h1>Visitor Insights</h1>
        <p class="earning__top-right">New Visitors</p>
      </div>
      <MyChart :data="datas" :options="options" ref="canvas"></MyChart>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import MyChart from "./MyChart.vue";
export default {
  name: "MyEarnings",
  components: { MyChart },

  setup() {
    const data = reactive({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          // hoverOffset: 4,
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });

    const option = reactive({
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
    });

    //////
    const canvas = ref(null);
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
          fill: true,
          borderColor: ["rgba(19, 247, 228,1)"],
          // backgroundColor: ["#28AEF3"],
          backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0, 0, 0, 350);

            // gradient.addColorStop(0, "hsla(167,72%,60%,0)");
            // gradient.addColorStop(0, "hsla(160,72%,60%,0.7)");
            // gradient.addColorStop(1, "hsla(150,60%,60%,0.1)");
            gradient.addColorStop(0, "rgba(0, 231, 255, 0.9)");
            gradient.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
            gradient.addColorStop(1, "rgba(0, 231, 255, 0)");
            // gradient.addColorStop(1, "rgba(169, 223, 216, 0.01)");

            return gradient;
          },
          // fillColor:
          //   "linear-gradient(181.45deg, #A9DFD8 -6.54%, rgba(169, 223, 216, 0.01) 96.44%)",
          hoverBorderWidth: 5,
          borderWidth: 3,
          tension: 0.1,
        },
      ],
    });

    onMounted(() => {});

    const options = reactive({
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    });

    return { canvas, data, datas, options, option };
  },
};
</script>

<style scoped lang="scss">
.earning__wapper {
  display: flex;
  gap: 14px;
  margin-bottom: 50px;
  .earning__wapper-left {
    border-radius: 10px;
    padding: 14px;
    width: 30%;
    background: #30313a;
    .earning__wapper-left-top {
      .earning__wapper-left-top--title {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 18px;
      }
      .earning__wapper-left-top--total {
        margin-top: 5px;
        margin-bottom: 9px;
        font-size: 1.2rem;
      }
      .earning__wapper-left-top--sales {
        font-weight: 700;
        font-size: 2.1rem;
        line-height: 24px;
        color: #a9dfd8;
      }
      .earning__wapper-left-top--profit {
        margin-top: 9px;
        margin-bottom: 9px;
        font-size: 1.1rem;
      }
    }
  }
  .earning__wapper-right {
    border-radius: 10px;
    padding: 14px;
    width: 70%;
    background: #30313a;
    .earning__wapper-right-wapper--top {
      display: flex;
      justify-content: space-between;
      .earning__top-right {
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        &::before {
          content: "";
          display: inline-block;
          margin-right: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fcb859;
        }
      }
    }

    // background: linear-gradient(
    //   181.45deg,
    //   #a9dfd8 -6.54%,
    //   rgba(169, 223, 216, 0.01) 96.44%
    // );
    // background: linear-gradient(
    //   181.45deg,
    //   #a9dfd8 -6.54%,
    //   rgba(169, 223, 216, 0.01) 96.44%
    // );
  }
}
</style>