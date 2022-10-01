<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    <LoginAuthVue class="register__wapper"></LoginAuthVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderAuthVue from "@/container/auth/HeaderAuth.vue";
import LoginAuthVue from "@/container/auth/Login.vue";
import FooterVue from "@/container/footer/Footer.vue";
export default {
  name: "LoginVue",
  components: {
    LoginAuthVue,
    HeaderAuthVue,
    FooterVue,
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
  height: 450px;
}
</style>