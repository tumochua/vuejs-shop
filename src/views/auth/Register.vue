<template>
  <div>
    <HeaderVue></HeaderVue>
    <Register class="register__wapper"></Register>
    <FooTerVue></FooTerVue>
  </div>
</template>

<script>
import Register from "@/container/auth/Register.vue";
import HeaderVue from "@/container/Header/Header.vue";
import FooTerVue from "@/container/footer/Footer.vue";
export default {
  name: "RegisterVue",
  components: {
    Register,
    HeaderVue,
    FooTerVue,
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
}
</style>