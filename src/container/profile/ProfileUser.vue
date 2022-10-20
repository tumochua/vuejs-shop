<template>
  <div class="admin__wapper">
    <div class="admin__body grid">
      <div class="admin__body-sidebar">sidebar</div>
      <div class="admin__body-content">
        <div class="admin__wapper-header grid">
          <div class="header__left">
            <input class="header__left-input" placeholder="Search here..." />
            <img
              src="../../assets/admin/icon-search.png"
              class="header__left-icon--search"
            />
          </div>
          <div class="header__right">
            <img src="../../assets/admin/icon-bell.png" />
            <img
              src="../../assets/admin/icon-avatar.png"
              class="header__right-avatar"
            />
            <img src="../../assets/admin/icon-dropdown.png" />
          </div>
        </div>
        <div>content</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, onMounted, reactive } from "vue";
export default {
  name: "ProfileUser",
  setup() {
    const route = useRoute();
    const sideBars = reactive([
      {
        id: 1,
        name: "Dashboard",
        icon: "../../assets/admin/sidebar/dashboard.png",
      },
      {
        id: 2,
        name: "Dashboard",
        icon: "../../assets/admin/sidebar/dashboard.png",
      },
      {
        id: 3,
        name: "Dashboard",
        icon: "../../assets/admin/sidebar/dashboard.png",
      },
      {
        id: 4,
        name: "Dashboard",
        icon: "../../assets/admin/sidebar/dashboard.png",
      },
    ]);
    onMounted(() => {});
    const idRoute = computed(() => {
      return route.params.id;
    });
    return { idRoute, sideBars };
  },
};
</script>

<style scoped lang="scss">
.admin__wapper {
  background: #21222d;

  width: 100%;
  height: 500px;
  color: var(--white-color);
  .admin__wapper-header {
    display: flex;
    justify-content: space-between;
    padding-top: 17px;
    align-items: center;
    margin-bottom: 23px;
    .header__left {
      width: 470px;
      height: 44px;
      position: relative;
      .header__left-input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        background: #30313a;
        padding-left: 30px;
        outline: none;
        color: var(--white-color);
      }
      .header__left-icon--search {
        position: absolute;
        // right: 0;
        left: 14px;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }
    .header__right {
      display: flex;
      align-items: center;
      .header__right-avatar {
        margin: 0 15px;
      }
    }
  }
  .admin__body {
    display: flex;
    gap: 27px;
    .admin__body-sidebar {
      margin-top: 55px;
      width: 20%;
    }
    .admin__body-content {
      width: 80%;
    }
  }
}
// .grid {
//   width: 759px;
// }
</style>