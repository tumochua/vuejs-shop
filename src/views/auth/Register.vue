<template>
  <div>
    <HeaderAuthVue></HeaderAuthVue>
    <ToastVue
      @handleCloseToast="handleCloseToast"
      :isToast="isToast"
      :dateTimes="3000"
      :handleChangeIcon="handleChangeIcon"
      :isErrorToast="isErrorToast"
    >
      <template v-slot:error v-if="isErrorToast">
        <span>
          <span class="toast__title">Error</span>
          <p class="toast__description">Error Serve</p>
        </span>
      </template>
      <template v-slot:body v-else>
        <span v-if="userData">
          <span class="toast__title">{{ handleChangeTitleTost }}</span>
          <p class="toast__description">
            {{ userData.data.data.message }}
          </p>
        </span>
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
    const isErrorToast = ref(false);
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };
    const handleCloseToast = () => {
      isToast.value = false;
    };
    const handleRegister = async () => {
      // console.log(isToast.value);
      try {
        let data = await handleApiRegister(informationUses);
        userData.value = data;
      } catch (error) {
        console.log("check errr", error);
        isErrorToast.value = true;
        console.log(isErrorToast.value);
      } finally {
        isToast.value = true;
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
      isErrorToast,
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