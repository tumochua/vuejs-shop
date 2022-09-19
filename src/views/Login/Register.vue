<template>
  <div class="login-infomation">
    <form>
      <!-- <label for="fname">First name:</label><br />
      <input type="text" v-model="informationUses.firstName" /><br />
      <label for="lname">Middle name:</label><br />
      <input type="text" v-model="informationUses.middleName" /><br />
      <label for="fname">Last name:</label><br />
      <input type="text" v-model="informationUses.lastName" /><br />
      <label for="lname">Mobile :</label><br />
      <input type="text" v-model="informationUses.mobile" /><br />
      <label for="lname">Email :</label><br />
      <input type="text" v-model="informationUses.email" /><br />
      <label for="lname">Passworld :</label><br />
      <input type="text" v-model="informationUses.passwordHash" /><br /><br /> -->

      <div>
        <LabelVue :fontSize="1.3">Đăng Nhập</LabelVue><br />
        <InputVue
          placeholder="Email/Số điện thoại/Tên đăng nhập"
          @onChangeValue="handleInput"
          name="firstName"
          :value="informationUses.firstName"
        ></InputVue>
        <TextVue :fontSize="14">tumochua</TextVue>
      </div>
      <InputVue
        placeholder="Email/Số điện thoại/Tên đăng nhập"
        @onChangeValue="handleInput"
        name="middleName"
        :value="informationUses.middleName"
      ></InputVue>
      <ButtonVue
        @onClickEvent="handleRegister"
        :padding="10"
        :BtnTextColor="true"
        :fontSize="1.2"
        >ĐĂNG NHẬP</ButtonVue
      >
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
// import { handleApiRegister } from "@/api/index.js";
import ButtonVue from "@/components/button/index.vue";
import InputVue from "@/components/input/index.vue";
import LabelVue from "@/components/label/index.vue";
import TextVue from "@/components/text/index.vue";
export default {
  name: "RegisterVue",
  components: {
    ButtonVue,
    InputVue,
    LabelVue,
    TextVue,
  },
  setup() {
    const informationUses = reactive({
      firstName: "",
      middleName: "",
      lastName: "",
      mobile: "",
      email: "",
      passwordHash: "",
    });
    const infors = reactive({
      email: "tumochua",
      password: "",
    });
    const handleRegister = async () => {
      // try {
      //   let data = await handleApiRegister(informationUses);
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
      console.log(informationUses);
    };
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };

    return { informationUses, handleRegister, handleInput, infors };
  },
};
</script>

<style scoped lang="scss">
.login-infomation {
  text-align: center;
  margin-top: 20px;
}
</style>