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
              {{ $t("auth.Log-in") }}
            </LabelVue>
            <br />
            <div class="register__infomation-form--body">
              <span> </span>
              <InputVue
                @onChangeValue="handleInput"
                :placeholder="$t('auth.placeholder.email')"
                :value="informationUses.email"
                name="email"
                class="register__input"
                type="email"
                :errorInput="checkErrorInputEmail"
              ></InputVue>
              <ErrorVue
                v-if="valueEmail"
                :errorMessage="valueEmail.status"
                :fontSize="valueEmail.status"
              >
                {{ valueEmail.message }}</ErrorVue
              >
              <span class="login__pasworld-wapper">
                <InputVue
                  :placeholder="$t('auth.placeholder.password')"
                  @onChangeValue="handleInput"
                  name="password"
                  :value="informationUses.password"
                  class="register__input"
                  :type="hadleInputPassworld"
                  :errorInput="checkErrorInputPassword"
                ></InputVue>
                <i
                  v-if="refPassworld"
                  class="fa-solid fa-eye-slash login__pasworld-icon"
                  @click="HandleShoHidePasworld"
                ></i>
                <i
                  v-else
                  class="fa-solid fa-eye login__pasworld-icon"
                  @click="HandleShoHidePasworld"
                ></i>
              </span>
              <ErrorVue
                v-if="valuePassword"
                :errorMessage="valuePassword.status"
                :fontSize="valuePassword.status"
              >
                {{ valuePassword.message }}</ErrorVue
              >
              <div>
                <ButtonVue
                  :padding="false"
                  :BtnTextColor="true"
                  :fontSize="1.6"
                  class="register__buuton"
                  @click="handleAuthLogin"
                >
                  {{ $t("auth.Log-in") }}</ButtonVue
                >
                <SpanVue :fontSize="1.2" :coler="true">
                  {{ $t("auth.Forgot-password") }}</SpanVue
                >
              </div>
              <span class="register__infomation-auth">
                <FaceBookVue></FaceBookVue>
                <GoogleVue></GoogleVue>
                <AppVue></AppVue>
              </span>
              <SpanVue :fontSize="1.2">
                {{ $t("auth.New-to-Shopee") }}
                <span class="resigter__nav"> {{ $t("auth.Log-in") }}</span>
              </SpanVue>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ref, computed, onMounted, onUpdated } from "vue";
import ButtonVue from "@/components/button/Button.vue";
import InputVue from "@/components/input/Input.vue";
import LabelVue from "@/components/label/Lable.vue";
import FaceBookVue from "@/components/auth/FaceBook.vue";
import GoogleVue from "@/components/auth/Google.vue";
import AppVue from "@/components/auth/App.vue";
import SpanVue from "@/components/span/Span.vue";
import ErrorVue from "@/components/error/ErrorText.vue";

import { handleValidateEmail, handleChekLength } from "../../helper/constants";
export default {
  name: "LoginAuthVue",

  components: {
    ButtonVue,
    InputVue,
    LabelVue,
    FaceBookVue,
    GoogleVue,
    AppVue,
    SpanVue,
    ErrorVue,
  },
  props: {
    informationUses: {
      type: Object,
    },
    userInput: {
      type: Object,
    },
  },
  setup({ informationUses }, { emit }) {
    const valueEmail = ref();
    const valuePassword = ref();
    const refPassworld = ref(true);
    const checkErrorInputEmail = ref(false);
    const checkErrorInputPassword = ref(false);
    function handleOnChanInput(name) {
      if (!valueEmail) {
        if (name === "email") {
          valueEmail.value.status = false;
          valueEmail.value.message = "";
          checkErrorInputEmail.value = false;
        }
      }
      if (!valuePassword) {
        if (name === "password") {
          valuePassword.value.status = false;
          valuePassword.value.message = "";
          checkErrorInputPassword.value = false;
        }
      }
    }

    const handleInput = (data) => {
      handleOnChanInput(data.name);

      emit("handleInput", data);
    };
    function handleCheckErrorInput() {
      // console.log(!valueEmail.value.message);
      if (!valueEmail.value.message || !valuePassword.value.message) {
        checkErrorInputEmail.value = false;
        checkErrorInputPassword.value = false;
      } else {
        checkErrorInputEmail.value = true;
        checkErrorInputPassword.value = true;
      }
    }

    const handleAuthLogin = () => {
      valueEmail.value = handleValidateEmail(informationUses);
      valuePassword.value = handleChekLength(informationUses);
      handleCheckErrorInput();
      if (valueEmail.value.errCode === 2 && valuePassword.value.errCode === 2) {
        emit("handleAuthLogin");
      }
    };

    const hadleInputPassworld = computed(() => {
      return refPassworld.value ? "password" : "text";
    });

    const HandleShoHidePasworld = () => {
      refPassworld.value = !refPassworld.value;
    };
    onMounted(() => {});
    onUpdated(() => {
      // console.log("onUpdated");
      // console.log(store.state);
    });
    const onChangeValue = (data) => {
      emit("onChangeValue", data);
    };
    // const data = handleValidation();
    // console.log("check data", data);

    return {
      HandleShoHidePasworld,
      refPassworld,
      hadleInputPassworld,
      handleInput,
      handleAuthLogin,
      valueEmail,
      valuePassword,
      checkErrorInputEmail,
      checkErrorInputPassword,
      onChangeValue,
    };
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
        .login__pasworld-wapper {
          // display: flex;
          position: relative;
          .login__pasworld-icon {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            width: 20px;
          }
        }
        .register__input {
          margin: 15px 0px;
        }
        .register__buuton {
          width: 100% !important;
          padding: 10px;
          margin-bottom: 20px;
          font-weight: 500;
          margin-top: 10px;
        }
        .register__infomation-auth {
          display: grid;
          grid-template-columns: auto auto auto;
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