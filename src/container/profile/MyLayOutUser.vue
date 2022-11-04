<template>
  <div>
    <ProfileHeaderVue></ProfileHeaderVue>
    <div class="layout__body grid">
      <SideBarVue></SideBarVue>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ProfileHeaderVue from "./ProfileHeader.vue";
import SideBarVue from "./SideBar.vue";
export default {
  name: "MyLayOutUser",
  components: {
    ProfileHeaderVue,
    SideBarVue,
  },
};
</script>

<style scoped lang="scss">
.layout__body {
  display: flex;
}
</style>