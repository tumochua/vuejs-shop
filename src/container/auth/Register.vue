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
              <div>
                <InputVue
                  placeholder="First Name"
                  @onChangeValue="handleInput"
                  name="firstName"
                  :value="informationUses.firstName"
                  class="register__input"
                ></InputVue>
                <ErrorText
                  v-if="dataValiate.firstName"
                  :errorMessage="dataValiate.firstName.status"
                  :fontSize="dataValiate.firstName.status"
                  >{{ dataValiate.firstName.message }}</ErrorText
                >
                <InputVue
                  placeholder="Last Name"
                  @onChangeValue="handleInput"
                  name="lastName"
                  :value="informationUses.lastName"
                  class="register__input"
                ></InputVue>
                <ErrorText
                  v-if="dataValiate.lastName"
                  :errorMessage="dataValiate.lastName.status"
                  :fontSize="dataValiate.lastName.status"
                  >{{ dataValiate.lastName.message }}</ErrorText
                >
              </div>
              <InputVue
                :placeholder="$t('auth.placeholder.email')"
                @onChangeValue="handleInput"
                name="email"
                :value="informationUses.email"
                class="register__input"
              ></InputVue>
              <ErrorText
                v-if="dataValiate.email"
                :errorMessage="dataValiate.email.status"
                :fontSize="dataValiate.email.status"
                >{{ dataValiate.email.message }}</ErrorText
              >
              <InputVue
                :placeholder="$t('auth.placeholder.password')"
                @onChangeValue="handleInput"
                name="password"
                :value="informationUses.password"
                class="register__input"
              ></InputVue>
              <ErrorText
                v-if="dataValiate.password"
                :errorMessage="dataValiate.password.status"
                :fontSize="dataValiate.password.status"
                >{{ dataValiate.password.message }}</ErrorText
              >
              <ButtonVue
                @onClickEvent="handleRegister"
                :padding="10"
                :BtnTextColor="true"
                :fontSize="1.6"
                class="register__buuton"
              >
                {{ $t("auth.Register") }}
              </ButtonVue>
              <span class="line">
                <TextVue> {{ $t("auth.And") }}</TextVue>
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
import { reactive } from "vue";
// import { handleApiRegister } from "@/api/index.js";
import ButtonVue from "@/components/button/Button.vue";
import LabelVue from "@/components/label/Lable.vue";
import FaceBookVue from "@/components/auth/FaceBook.vue";
import TextVue from "@/components/text/Text.vue";
import GoogleVue from "@/components/auth/Google.vue";
import SpanVue from "@/components/span/Span.vue";
import InputVue from "@/components/input/Input.vue";
import ErrorText from "@/components/error/ErrorText.vue";
import {
  handleValidateEmail,
  handleChekLengths,
  // handleValidateForm,
} from "../../helper/constants";
export default {
  name: "RegisterVue",
  components: {
    ButtonVue,
    LabelVue,
    FaceBookVue,
    GoogleVue,
    TextVue,
    SpanVue,
    InputVue,
    ErrorText,
  },
  props: {
    informationUses: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  setup({ informationUses }, { emit }) {
    const dataValiate = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    const handleInput = (data) => {
      // dataValiate.firstName.status = false;
      // dataValiate.firstName.message = "";
      emit("handleInput", data);
    };
    // watch(informationUses, () => {
    //   console.log("change props");
    // });
    function handleCheckValidate() {
      dataValiate.firstName = handleChekLengths({
        data: informationUses.firstName,
        type: "firstName",
        minLength: 4,
      });
      dataValiate.lastName = handleChekLengths({
        data: informationUses.lastName,
        type: "lastName",
        minLength: 4,
      });
      dataValiate.password = handleChekLengths({
        data: informationUses.password,
        type: "password",
        minLength: 6,
      });
      dataValiate.email = handleValidateEmail(informationUses);
    }

    const handleRegister = () => {
      handleCheckValidate();
      // console.log("dataValiate", dataValiate.email.errCode);
      const result =
        dataValiate.email.errCode === 2 &&
        dataValiate.firstName.errCode === 2 &&
        dataValiate.lastName.errCode === 2 &&
        dataValiate.password.errCode === 2;
      if (result) {
        emit("handleRegister");
      }
    };

    return { handleRegister, handleInput, dataValiate };
  },
};
</script>

<style scoped lang="scss">
.register__infomation-wapper {
  text-align: center;
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
        .line {
        }
      }
    }
  }
}
</style>