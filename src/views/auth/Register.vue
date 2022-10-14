<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    <ToastVue></ToastVue>
    <Register
      class="register__wapper"
      :informationUses="informationUses"
      @handleInput="handleInput"
      @handleRegister="handleRegister"
    ></Register>
    <FooTerVue></FooTerVue>
  </div>
</template>

<script>
import Register from "@/container/auth/Register.vue";
// import HeaderAuth from "@container/auth/HeaderAuth.vue";
import HeaderAuthVue from "@/container/auth/HeaderAuth.vue";
import FooTerVue from "@/container/footer/Footer.vue";
import ToastVue from "../../components/toast/Toast.vue";
import { reactive, ref } from "vue";
// import { handleApiRegister } from "@/api/index";
export default {
  name: "RegisterVue",
  components: {
    Register,
    HeaderAuthVue,
    FooTerVue,
    ToastVue,
  },
  setup() {
    const informationUses = reactive({
      firstName: "",
      middleName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
    });
    const userData = ref();
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };
    const handleRegister = async () => {
      try {
        let data = await "handleApiRegister"(informationUses);
        userData.value = data;
        console.log("informationUses", userData.value.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    return { informationUses, userData, handleInput, handleRegister };
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
}
</style>