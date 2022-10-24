<template>
  <div class="admin__body-sidebar">
    <ul v-for="sideBar in sideBarUiAdmin" :key="sideBar.id">
      <li class="sidebar__item">
        <img :src="sideBar.icon" class="sidebar__item-icon" />
        <!-- <span class="sidebar__item-name">{{ sideBar.name }}</span> -->
        <router-link
          :to="{ name: sideBar.routerLinks.name }"
          class="sidebar__item-name"
          >{{ sideBar.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { sideBarUiAdmin } from "../../data/MyData";

export default {
  name: "SideBar",
  props: {
    sideBars: {},
  },
  setup() {
    return { sideBarUiAdmin };
  },
};
</script>

<style scoped lang="scss">
.admin__body-sidebar {
  margin-top: 55px;
  width: 12%;
  :hover {
    background: #a9dfd8;
    cursor: pointer;
    border-radius: 4px;
    color: #171821;
  }
  .sidebar__item {
    padding: 10px 14px;
    list-style: none;
    margin-bottom: 5px;
    color: #87888c;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    .sidebar__item-icon {
      margin-right: 10px;
      color: #000000;
    }
    .sidebar__item-name {
      color: #87888c;
      text-decoration: none;
    }
  }
}
</style>