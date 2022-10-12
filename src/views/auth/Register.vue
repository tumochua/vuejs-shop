<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    <Register
      class="register__wapper"
      :informationUses="informationUses"
      :userData="userData"
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
import { reactive, ref, onUpdated } from "vue";
import { handleValidateForm } from "../../helper/constants";
// import { handleApiRegister } from "@/api/index";
export default {
  name: "RegisterVue",
  components: {
    Register,
    HeaderAuthVue,
    FooTerVue,
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
    onUpdated(() => {
      console.log("onUpdated", userData.value);
    });
    const userData = ref();
    const handleInput = (data) => {
      // if (userData.value.errCode) {
      //   userData.value.message = "";
      // }
      // if(userData.value.err)
      informationUses[data.name] = data.value;
    };
    const handleRegister = async () => {
      try {
        let data = handleValidateForm(informationUses);
        userData.value = data;
        // if (data.status === 2) {
        //   let data = await handleApiRegister(informationUses);
        //   console.log(data);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    return {
      informationUses,
      handleInput,
      handleRegister,
      handleValidateForm,
      userData,
    };
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
  // height: auto;
}
</style>