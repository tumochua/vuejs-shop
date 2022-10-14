<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    <LoginAuthVue
      class="register__wapper"
      :informationUses="informationUses"
      @handleInput="handleInput"
      @handleAuthLogin="handleAuthLogin"
    ></LoginAuthVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderAuthVue from "@/container/auth/HeaderAuth.vue";
import LoginAuthVue from "@/container/auth/Login.vue";
import FooterVue from "@/container/footer/Footer.vue";
import { reactive } from "vue";
// import { useStore } from "vuex";

export default {
  name: "LoginVue",
  components: {
    LoginAuthVue,
    HeaderAuthVue,
    FooterVue,
  },
  setup() {
    const informationUses = reactive({
      email: "",
      password: "",
    });
    //  const store = useStore();
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };

    const handleAuthLogin = () => {
      // store.dispatch("handleAuthLogin",informationUses)
      console.log("handleAuthLogin", informationUses);
    };
    return { informationUses, handleInput, handleAuthLogin };
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
  height: 450px;
}
</style>