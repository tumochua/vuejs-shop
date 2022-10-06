<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
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
import { reactive } from "vue";
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
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };
    const handleRegister = async () => {
      try {
        // let data = await handleApiRegister(informationUses);
        console.log(informationUses);
      } catch (error) {
        console.log(error);
      }
    };
    return { informationUses, handleInput, handleRegister };
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
  height: 450px;
}
</style>