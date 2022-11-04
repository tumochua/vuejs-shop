<template>
  <div class="production__wapper">
    <div class="production__wapper-production">
      <h1 class="production-title">Top Products</h1>
      <div class="production__wapper-list">
        <ul
          v-for="topTitleProduct in topTitleProducts"
          :key="topTitleProduct.id"
        >
          <li class="producton-list-title">{{ topTitleProduct.name }}</li>
          <span v-for="listProduct in listProducts" :key="listProduct.id">
            <li class="producton-list">
              {{ listProduct[topTitleProduct.name] }}
            </li>
          </span>
        </ul>
      </div>
    </div>
    <div class="production__line">
      <div>
        <MyChart
          :data="topProduction.data"
          type="line"
          :options="topProduction.options"
        ></MyChart>
      </div>
      <div class="production__line-foot-wapper">
        <div class="production-foot-date">
          <div class="production-foot-date-item">
            <input type="radio" />
            <p class="production-foot-titile">Last Month</p>
          </div>
          <div>$4,087</div>
        </div>
        <div class="production-foot-date">
          <div class="production-foot-date-item">
            <input type="radio" />
            <p class="production-foot-titile">Last Month</p>
          </div>
          <div>$4,087</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import MyChart from "./MyChart.vue";

import { topProduction } from "../../data/MyData";
export default {
  name: "TopProducts",
  components: {
    MyChart,
  },
  setup() {
    const topTitleProducts = reactive([
      {
        id: 1,
        name: "id",
      },
      {
        id: 2,
        name: "Name",
      },
      {
        id: 3,
        name: "Popularity",
      },
      {
        id: 4,
        name: "Sales",
      },
    ]);
    const listProducts = reactive([
      {
        id: "01",
        Name: "Home Decore Range",
        Popularity: "46%",
        Sales: "46%",
      },
      {
        id: "02",
        Name: "Disney Princess Dress",
        Popularity: "17%",
        Sales: "17%",
      },
      {
        id: "03",
        Name: "Bathroom Essentials",
        Popularity: "19%",
        Sales: "19%",
      },
      {
        id: "04",
        Name: "Apple Smartwatch",
        Popularity: "29%",
        Sales: "17%",
      },
    ]);

    return { topTitleProducts, listProducts, topProduction };
  },
};
</script>

<style scoped lang="scss">
.production__wapper {
  // width: 65%;
  display: flex;
  gap: 14px;

  .production__wapper-production {
    border-radius: 10px;
    padding: 20px 14px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 1.6rem;
    background: #30313a;
    width: 75%;
    display: flex;
    flex-direction: column;
    .production-title {
      margin-top: 14px;
      margin-bottom: 20px;
    }
    .production__wapper-list {
      display: grid;
      grid-template-columns: 1fr 2fr 3fr 1fr;
      ul {
        list-style: none;
      }
      .producton-list-title {
        padding: 13px;
        opacity: 0.8;
      }
    }
    .producton-list {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 13px;
    }
  }
  .production__line {
    .production__line-foot-wapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .production-foot-date {
        margin-top: 10px;
        text-align: center;
        font-size: 1.2rem;
        .production-foot-date-item {
          display: flex;
          margin-bottom: 5px;
          .production-foot-titile {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>