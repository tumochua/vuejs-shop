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
        :data="earningsAndvisitorInsights.earnings.data"
        :width="80"
        :height="80"
      ></MyChart>
    </div>
    <div class="earning__wapper-right">
      <div class="earning__wapper-right-wapper--top">
        <h1>Visitor Insights</h1>
        <p class="earning__top-right">New Visitors</p>
      </div>
      <MyChart
        :data="earningsAndvisitorInsights.visitorInsights.data"
        :options="earningsAndvisitorInsights.visitorInsights.option"
        ref="canvas"
      ></MyChart>
    </div>
  </div>
</template>

<script>
import MyChart from "./MyChart.vue";

import { earningsAndvisitorInsights } from "../../data/MyData";

export default {
  name: "MyEarnings",
  components: { MyChart },

  setup() {
    return { earningsAndvisitorInsights };
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