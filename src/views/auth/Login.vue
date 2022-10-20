<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    <LoginAuthVue
      class="register__wapper"
      :informationUses="informationUses"
      @handleInput="handleInput"
      @handleAuthLogin="handleAuthLogin"
      @onChangeValue="onChangeValue"
      :userInput="userInput"
    ></LoginAuthVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderAuthVue from "@/container/auth/HeaderAuth.vue";
import LoginAuthVue from "@/container/auth/Login.vue";
import FooterVue from "@/container/footer/Footer.vue";
import { reactive, onUpdated } from "vue";

import { useStore } from "vuex";

import { useRouter } from "vue-router";
// import { handleValidation } from "../../helper/constants";

export default {
  name: "LoginVue",
  components: {
    LoginAuthVue,
    HeaderAuthVue,
    FooterVue,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const informationUses = reactive({
      email: "",
      password: "",
    });
    const userInput = reactive({
      email: "",
      password: "",
    });
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };

    onUpdated(() => {});

    const handleAuthLogin = async () => {
      await store.dispatch("handleAuthLogin", informationUses);
      console.log("check state vuex", store.state.usersLogin);
      if (store.state.usersLogin) {
        router.push({ name: "Home" });
      }
      // console.log("handleAuthLogin", informationUses);
    };
    const onChangeValue = (data) => {
      userInput[data.name] = data.value;
    };

    return {
      informationUses,
      handleInput,
      handleAuthLogin,
      onChangeValue,
      userInput,
    };
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
  height: 450px;
}
</style>