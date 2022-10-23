<template>
  <div class="admin__wapper">
    <div class="admin__body grid">
      <SideBar :sideBars="sideBars"></SideBar>
      <div class="admin__body-content">
        <ProfileHeader></ProfileHeader>
        <div class="body__content-wapper">
          <SalesSummary :salesSummarys="salesSummarys"></SalesSummary>
          <TopProducts></TopProducts>
          <MyEarnings></MyEarnings>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, onMounted, reactive } from "vue";
// import img from '../../assets/admin/sidebar/dashboard.png'
import SalesSummary from "./SalesSummary.vue";
import SideBar from "./SideBar.vue";
import ProfileHeader from "./ProfileHeader.vue";
import TopProducts from "./TopProducts.vue";
import MyEarnings from "./MyEarnings.vue";
export default {
  name: "ProfileUser",
  components: {
    SalesSummary,
    SideBar,
    ProfileHeader,
    TopProducts,
    MyEarnings,
  },
  setup() {
    const route = useRoute();
    const sideBars = reactive([
      {
        id: 1,
        name: "Dashboard",

        icon: require("@/assets/admin/sidebar/dashboard.png"),
      },
      {
        id: 2,
        name: "Profile",
        icon: require("@/assets/admin/sidebar/profile.png"),
      },
      {
        id: 3,
        name: "Leaderboard",
        icon: require("@/assets/admin/sidebar/leaderboard.png"),
      },
      {
        id: 4,
        name: "Order",
        icon: require("@/assets/admin/sidebar/order.png"),
      },
      {
        id: 5,
        name: "Product",
        icon: require("@/assets/admin/sidebar/product.png"),
      },
      {
        id: 6,
        name: "Sales Report",
        icon: require("@/assets/admin/sidebar/sales-report.png"),
      },
      {
        id: 7,
        name: "Message",
        icon: require("@/assets/admin/sidebar/message.png"),
      },
      {
        id: 8,
        name: "Settings",
        icon: require("@/assets/admin/sidebar/settings.png"),
      },
      {
        id: 9,
        name: "Favourite",
        icon: require("@/assets/admin/sidebar/favourite.png"),
      },
      {
        id: 10,
        name: "History",
        icon: require("@/assets/admin/sidebar/history.png"),
      },
      {
        id: 11,
        name: "Signout",
        icon: require("@/assets/admin/sidebar/logout.png"),
      },
    ]);
    const salesSummarys = reactive([
      {
        id: 1,
        icon: require("@/assets/admin/admin-content/icon-sales.png"),
        turnover: "$5k",
        title: "Total Sales",
        description: "+10% from yesterday",
      },
      {
        id: 2,
        icon: require("@/assets/admin/admin-content/icon-order.png"),
        turnover: "500",
        title: "Total Order",
        description: "+8% from yesterday",
      },
      {
        id: 1,
        icon: require("@/assets/admin/admin-content/icon-production.png"),
        turnover: "9",
        title: "Product Sold",
        description: "+2% from yesterday",
      },
      {
        id: 1,
        icon: require("@/assets/admin/admin-content/icon-customer.png"),
        turnover: "12",
        title: "New Customer",
        description: "+3% from yesterday",
      },
    ]);
    onMounted(() => {});
    const idRoute = computed(() => {
      return route.params.id;
    });
    return { idRoute, sideBars, salesSummarys };
  },
};
</script>

<style scoped lang="scss">
.admin__wapper {
  background: #21222d;
  width: 100%;
  color: var(--white-color);
  .admin__body {
    display: flex;
    gap: 27px;

    .admin__body-content {
      width: 87%;
      .body__content-wapper {
      }
    }
  }
}
// .grid {
//   width: 759px;
// }
</style>