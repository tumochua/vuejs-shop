<template>
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
</template>

<script>
export default {
  name: "ProfileHeader",
};
</script>

<style scoped lang="scss">
.admin__wapper-header {
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
  align-items: center;
  margin-bottom: 23px;
  padding-bottom: 17px;
  background: #21222d;
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
</style>