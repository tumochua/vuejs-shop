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
            <LabelVue :fontSize="2" class="register__infomation-form-title">
              {{ $t("auth.Register") }} </LabelVue
            ><br />
            <div class="register__infomation-form--body">
              {{ userData }}
              <div class="form-fullName">
                <WrapperInput
                  placeholder="First Name"
                  name="firstName"
                  :value="informationUses.firstName"
                  @onChangeValue="handleInput"
                  :errorMessage="userData.errCode"
                  :userData="userData"
                ></WrapperInput>
                <WrapperInput
                  placeholder="Last Name"
                  name="lastName"
                  :value="informationUses.lastName"
                  @onChangeValue="handleInput"
                  :errorMessage="userData.errCode"
                  :userData="userData"
                ></WrapperInput>
              </div>
              <WrapperInput
                :placeholder="$t('auth.placeholder.email')"
                name="email"
                :value="informationUses.email"
                @onChangeValue="handleInput"
                :errorMessage="userData.errCode"
                :userData="userData"
              ></WrapperInput>
              <WrapperInput
                :placeholder="$t('auth.placeholder.password')"
                name="password"
                :value="informationUses.password"
                @onChangeValue="handleInput"
                :errorMessage="userData.errCode"
                :userData="userData"
              ></WrapperInput>
              <ButtonVue
                @onClickEvent="handleRegister"
                :padding="10"
                :BtnTextColor="true"
                :fontSize="1.6"
                class="register__buuton"
              >
                {{ $t("auth.Register") }}
              </ButtonVue>
              <span>
                <TextVue class="line"> {{ $t("auth.And") }}</TextVue>
              </span>
              <span class="register__infomation-auth">
                <FaceBookVue></FaceBookVue>
                <GoogleVue></GoogleVue>
              </span>
              <SpanVue :fontSize="1.2">
                {{ $t("auth.description") }}<br />
                <span class="resigter__nav"
                  >{{ $t("auth.Terms-of-Service") }} &
                </span>
                <span class="resigter__nav"
                  >{{ $t("auth.Privacy-Policy") }}
                </span>
              </SpanVue>
              <TextVue>
                {{ $t("auth.account") }}
                <span class="resigter__nav"> {{ $t("auth.Log-in") }}</span>
              </TextVue>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import Cookies from "js-cookie";
import { onUpdated } from "vue";
// import { handleApiRegister } from "@/api/index.js";
import ButtonVue from "@/components/button/Button.vue";
// import InputVue from "@/components/input/Input.vue";
import LabelVue from "@/components/label/Lable.vue";
import FaceBookVue from "@/components/auth/FaceBook.vue";
import TextVue from "@/components/text/Text.vue";
import GoogleVue from "@/components/auth/Google.vue";
import SpanVue from "@/components/span/Span.vue";
import WrapperInput from "@/components/wrapperInput/WrapperInput.vue";
import { handleValidateForm } from "@/helper/constants";
// import ErrorText from "@/components/error/ErrorText.vue";
export default {
  name: "RegisterVue",
  components: {
    ButtonVue,
    // InputVue,
    LabelVue,
    FaceBookVue,
    GoogleVue,
    TextVue,
    SpanVue,
    // ErrorText,
    WrapperInput,
  },
  props: {
    informationUses: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    userData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(_, { emit }) {
    const handleInput = (data) => {
      emit("handleInput", data);
      // console.log( informationUses[data.name] = data.value);
      // informationUses[data.name] = data.value;
    };
    // watch(informationUses, () => {
    //   console.log("change props");
    // });

    const handleRegister = () => {
      emit("handleRegister");
    };
    onUpdated(() => {});

    return { handleRegister, handleInput, handleValidateForm };
    // const informationUses = reactive({
    //   firstName: "",
    //   middleName: "",
    //   lastName: "",
    //   mobile: "",
    //   email: "",
    //   password: "",
    // });

    // const handleRegister = async () => {
    //   try {
    //     let data = await handleApiRegister(informationUses);
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const handleInput = (data) => {
    //   informationUses[data.name] = data.value;
    // };
    // const handleInput = (data) => {
    //   informationUses[data.name] = data.value;
    // };

    // return { informationUses, handleRegister, handleInput };
  },
};
</script>

<style scoped lang="scss">
.register__infomation-wapper {
  // text-align: center;
  padding: 10px;
  .register__infomation-content {
    display: flex;
    // position: relative;
    justify-content: space-around;
    align-items: center;
    .register__infomation-content--left {
      width: 55%;
      img {
        width: 100%;
      }
    }
    .register__infomation-content--right {
      width: 35%;
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
          margin-bottom: 20px;
          margin-top: 20px;
        }
        .register__infomation-auth {
          display: grid;
          grid-template-columns: auto auto;
          margin: 30px 0px;
          gap: 10px;
        }
        .resigter__nav {
          color: var(--colers);
        }
        .form-fullName {
          display: flex;
          gap: 10px;
        }
        .line {
        }
      }
    }
  }
}
</style>