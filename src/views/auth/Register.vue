<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    {{ handleChangeTitleTost }}
    <ToastVue
      :isToast="isToast"
      @handleCloseToast="handleCloseToast"
      :dateTimes="3000"
      icon="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
      :handleChangeIcon="handleChangeIcon"
    >
      <template v-slot:body v-if="userData">
        <span class="toast__title">{{ handleChangeTitleTost }}</span>
        <p class="toast__description">{{ userData.data.data.message }}</p>
      </template>
    </ToastVue>
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
import ToastVue from "@/components/toast/Toast.vue";
// import LoaderVue from "@/components/loader/Loader.vue";
import { reactive, ref, computed } from "vue";

import { handleApiRegister } from "@/api/index";
export default {
  name: "RegisterVue",
  components: {
    Register,
    HeaderAuthVue,
    FooTerVue,
    ToastVue,
    // LoaderVue,
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
    const isToast = ref(false);
    const isLoader = ref(false);
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };
    const handleCloseToast = () => {
      isToast.value = false;
    };
    const handleRegister = async () => {
      // console.log(isToast.value);
      try {
        isLoader.value = true;
        let data = await handleApiRegister(informationUses);
        userData.value = data;
        console.log("informationUses", userData.value.data.data.errorCode);
      } catch (error) {
        console.log(error);
      } finally {
        isToast.value = !isToast.value;
      }
    };
    const handleChangeTitleTost = computed(() => {
      return userData.value && userData.value.data.data.errorCode === 4
        ? "Warning"
        : "Successful";
      // return userData;
    });
    const handleChangeIcon = computed(() => {
      return userData.value && userData.value.data.data.errorCode === 4
        ? "fa-solid fa-circle-info toast__wapper--icon-warning"
        : "fa-solid fa-circle-check toast__wapper--icon-success";
    });
    return {
      informationUses,
      userData,
      isToast,
      isLoader,
      handleInput,
      handleRegister,
      handleCloseToast,
      handleChangeTitleTost,
      handleChangeIcon,
    };
  },
};
</script>

<style scoped lang="scss">
.register__wapper {
  background: rgb(238, 77, 45);
}
</style>