<template>
  <div class="login-infomation">
    <form>
      <label for="fname">First name:</label><br />
      <input type="text" v-model="informationUse.firstName" /><br />
      <label for="lname">Middle name:</label><br />
      <input type="text" v-model="informationUse.middleName" /><br />
      <label for="fname">Last name:</label><br />
      <input type="text" v-model="informationUse.lastName" /><br />
      <label for="lname">Mobile :</label><br />
      <input type="text" v-model="informationUse.mobile" /><br />
      <label for="lname">Email :</label><br />
      <input type="text" v-model="informationUse.email" /><br />
      <label for="lname">Passworld :</label><br />
      <input type="text" v-model="informationUse.passwordHash" /><br /><br />
      <button @click="handleRegister">Đăng Ký</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { handleApiRegister } from "@/api/index.js";
export default {
  name: "RegisterVue",
  setup() {
    const informationUse = reactive({
      firstName: "",
      middleName: "",
      lastName: "",
      mobile: "",
      email: "",
      passwordHash: "",
    });
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        let data = await handleApiRegister(informationUse);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    return { informationUse, handleRegister };
  },
};
</script>

<style scoped lang="scss">
.login-infomation {
  text-align: center;
  margin-top: 20px;
}
</style>