<template>
  <div class="register__infomation-wapper">
    <div class="grid register__infomation-content">
      <span class="register__infomation-content--left">
        <img
          src="https://media.vneconomy.vn/w800/images/upload/2022/09/21/anh-bai-4.jpg"
        />
      </span>
      <div class="register__infomation-content--right">
        <form>
          <div>
            <LabelVue :fontSize="2" class="register__infomation-form-title"
              >Đăng Ký</LabelVue
            ><br />
            <div class="register__infomation-form--body">
              <InputVue
                placeholder="Email/Số điện thoại/Tên đăng nhập"
                @onChangeValue="handleInput"
                name="email"
                :value="informationUses.email"
                class="register__input"
              ></InputVue>
              <ButtonVue
                @onClickEvent="handleRegister"
                :padding="10"
                :BtnTextColor="true"
                :fontSize="1.6"
                class="register__buuton"
                >ĐĂNG NHẬP</ButtonVue
              >
              <span class="line">
                <TextVue>HOẶC</TextVue>

              </span>
              <span class="register__infomation-auth">
                <FaceBookVue></FaceBookVue>
                <GoogleVue></GoogleVue>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { reactive } from "vue";
import { handleApiRegister } from "@/api/index.js";
import ButtonVue from "@/components/button/Button.vue";
import InputVue from "@/components/input/Input.vue";
import LabelVue from "@/components/label/Lable.vue";
import FaceBookVue from "@/components/auth/FaceBook.vue";
import TextVue from "@/components/text/Text.vue";
import GoogleVue from "@/components/auth/Google.vue";
export default {
  name: "RegisterVue",
  components: {
    ButtonVue,
    InputVue,
    LabelVue,
    FaceBookVue,
    GoogleVue,
    TextVue,
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

    const handleRegister = async () => {
      try {
        let data = await handleApiRegister(informationUses);
        console.log(data);
        // localStorage.setItem("token", data.data.token);
        Cookies.set("token", data.data.token);
      } catch (error) {
        console.log(error);
      }
    };
    const handleInput = (data) => {
      informationUses[data.name] = data.value;
    };

    return { informationUses, handleRegister, handleInput };
  },
};
</script>

<style scoped lang="scss">
.register__infomation-wapper {
  text-align: center;
  margin-top: 20px;
  .register__infomation-content {
    display: flex;
    position: relative;
    .register__infomation-content--left {
      width: 55%;
      img {
        width: 100%;
      }
    }
    .register__infomation-content--right {
      width: 35%;
      position: absolute;
      right: 0%;
      top: 10%;
      background: var(--white-color);
      padding: 22px 30px;
      border-radius: 4px;
      .register__infomation-form-title {
        display: block;
        text-align: start;
      }
      .register__infomation-form--body {
        // margin-top: 15px;
        .register__input {
          margin: 15px 0px;
        }
        .register__buuton {
          width: 100% !important;
          padding: 10px;
          margin-bottom: 10px;
        }
        .register__infomation-auth {
          display: grid;
          grid-template-columns: auto auto;
          gap: 10px;
        }
      }
    }
  }
}
</style>