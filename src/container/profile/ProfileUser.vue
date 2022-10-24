<template>
  <div class="admin__wapper">
    <div class="admin__body grid">
      <SideBar></SideBar>
      <div class="admin__body-content">
        <ProfileHeader></ProfileHeader>
        <div class="body__content-wapper">
          <SalesSummary></SalesSummary>
          <TopProducts></TopProducts>
          <MyEarnings></MyEarnings>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
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

    onMounted(() => {});
    const idRoute = computed(() => {
      return route.params.id;
    });
    return { idRoute };
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