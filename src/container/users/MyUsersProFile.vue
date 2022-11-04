<template>
  <div>
    <HeaderVue></HeaderVue>
    <div class="container">
      <ButtonVue>Add New Production</ButtonVue>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../Header/Header.vue";
import ButtonVue from "@/components/button/Button.vue";
export default {
  name: "MyUsersProFile",
  components: {
    HeaderVue,
    ButtonVue,
  },
};
</script>

<style>
</style>