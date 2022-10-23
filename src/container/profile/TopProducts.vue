<template>
  <div>
    <h1>topTitleProducts</h1>
    <div class="production__wapper">
      <div class="production__wapper-title">
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
      <div class="production__line">
        <MyChart :data="data" type="line"></MyChart>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import MyChart from "./MyChart.vue";
export default {
  name: "TopProducts",
  components: {
    MyChart,
  },
  setup() {
    // const topTitleProducts = reactive(["#", "name", "Popularity", "Sales"]);
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

    const labels = reactive([
      "Janunary",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ]);
    const data = reactive({
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "My First Dataset",
          data: [12, 22, 10, 31, 35, 30, 60],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    });

    return { topTitleProducts, listProducts, data };
  },
};
</script>

<style scoped lang="scss">
.production__wapper {
  // width: 65%;
  display: flex;
  gap: 14px;

  .production__wapper-title {
    border-radius: 10px;
    padding: 20px 14px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 1.6rem;
    background: #30313a;
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 1fr;
    ul {
      list-style: none;
    }
    .producton-list-title {
      padding: 13px;
      opacity: 0.8;
    }
    .producton-list {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 13px;
    }
  }
  .production__line {
  }
}
</style>