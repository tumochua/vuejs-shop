<template>
  <div class="body__content-left--wapper">
    <div class="sales-summary">
      <div class="body__content-title">
        <h2>Today’s Sales</h2>
        <p class="body__content-left-sales">Sales Summary</p>
      </div>
      <div class="content__turnover">
        <div
          v-for="salesSummary in salesSummarys"
          :key="salesSummary.id"
          class="content__turnover-item"
        >
          <img :src="salesSummary.icon" alt="" class="content__turnover-icon" />
          <div class="content__turnover-body">
            <p class="content__turnover-item--turnover">
              {{ salesSummary.turnover }}
            </p>
            <p class="content__turnover-item--title">
              {{ salesSummary.title }}
            </p>
            <p class="content__turnover-item--description">
              {{ salesSummary.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="body__content-rigth">
      <h2>Level</h2>
      <div class="colum__wapper">
        <MyChart
          :data="todaysSales.data"
          type="bar"
          :options="todaysSales.options"
        ></MyChart>
      </div>
      <div class="colum__wapper--botton">
        <div class="colum__wapper--botton--voloum">
          <input type="radio" />
          Volume
        </div>
        <p class="colum__wapper--botton--border"></p>
        <div class="colum__wapper--botton--service">Service</div>
      </div>
    </div>
  </div>
</template>

<script>
import MyChart from "./MyChart.vue";

import { todaysSales, salesSummarys } from "../../data/MyData";

export default {
  name: "SalesSummary",
  components: {
    MyChart,
  },
  props: {},
  setup() {
    return { todaysSales, salesSummarys };
  },
};
</script>

<style scoped lang="scss">
// display: flex;
.body__content-left--wapper {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  .sales-summary {
    width: 70%;
    background: #30313a;
    border-radius: 10px;
    padding: 20px 14px;
    // display: flex;
    .body__content-title {
      .body__content-left-sales {
        margin-top: 5px;
        color: #a0a0a0;
        font-size: 1.2rem;
      }
    }
    .content__turnover {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .content__turnover-item {
        padding: 12px;
        background: #171821;
        border-radius: 10px;
        .content__turnover-icon {
        }
        .content__turnover-body {
          margin-top: 12px;
          .content__turnover-item--turnover {
            font-weight: 600;
            font-size: 1.6rem;
            color: #ffffff;
          }
          .content__turnover-item--title {
            color: #e8e8e8;
            margin: 5px 0;
            font-weight: 500;
            font-size: 1.1rem;
            line-height: 12px;
          }
          .content__turnover-item--description {
            color: #a9dfd8;
            font-weight: 500;
          }
        }
      }
    }
  }
  .body__content-rigth {
    // width: 22%;
    .colum__wapper {
      // background: rgb(175, 94, 175);
      display: flex;
      gap: 10px;
      justify-content: space-between;
      .colum-item {
        width: 13px;
        height: 100px;
        background: #a9dfd8;
        border-radius: 4px 4px 0px 0px;
        margin-top: 40px;
        margin-bottom: 30px;
      }
    }
    .colum__wapper--botton {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 6px;
      font-size: 1.2rem;

      .colum__wapper--botton--voloum {
        display: flex;
        gap: 5px;
        // &:after {
        //   content: "";
        //   display: inline-block;
        //   height: 14px;
        //   border-left: 2px solid rgba(255, 255, 255, 0.18);
        //   margin-left: 20px;
        // }
      }
      .colum__wapper--botton--border {
        width: 2px;
        height: 14px;
        border-left: 2px solid rgba(255, 255, 255, 0.18);
      }
    }
  }
}
</style>