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
              <InputVue
                :placeholder="$t('auth.placeholder.email')"
                @onChangeValue="handleInput"
                name="email"
                :value="informationUses.email"
                class="register__input"
                type="email"
                :errorInput="result.resultEmail.isError"
              ></InputVue>
              <ErrorVue
                :fontSize="true"
                :errorMessage="result.resultEmail.isError"
                :isMb="false"
                >{{ result.resultEmail.detailMessage }}</ErrorVue
              >
              <span class="login__pasworld-wapper">
                <InputVue
                  :placeholder="$t('auth.placeholder.password')"
                  @onChangeValue="handleInput"
                  name="password"
                  :value="informationUses.password"
                  class="register__input"
                  :type="hadleInputPassworld"
                  :errorInput="result.resultPassword.isError"
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
                :fontSize="true"
                :errorMessage="result.resultPassword.isError"
                >{{ result.resultPassword.detailMessage }}</ErrorVue
              >
              <!-- {{ result }} -->
              <div>
                <ButtonVue
                  :padding="10"
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
// import Cookies from "js-cookie";
import { ref, reactive, computed, onMounted, onUpdated } from "vue";
// import { handleApiRegister } from "@/api/index.js";
import ButtonVue from "@/components/button/Button.vue";
import InputVue from "@/components/input/Input.vue";
import LabelVue from "@/components/label/Lable.vue";
import FaceBookVue from "@/components/auth/FaceBook.vue";
import GoogleVue from "@/components/auth/Google.vue";
import AppVue from "@/components/auth/App.vue";
import SpanVue from "@/components/span/Span.vue";
import ErrorVue from "@/components/error/ErrorText.vue";
import {
  handleValidateEmail,
  handleValidatePassword,
} from "../../helper/constants.js";
import { useStore } from "vuex";
// import {handleLogin} from '../../api/index'

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
  setup() {
    const informationUses = reactive({
      email: "",
      password: "",
    });
    const store = useStore();
    const refPassworld = ref(true);
    // const errorInput = ref(true);
    // const errorMessage = ref(true);
    const result = reactive({
      resultEmail: {},
      resultPassword: {},
    });
    const handleAuthLogin = () => {
      result.resultEmail = handleValidateEmail({
        email: informationUses.email,
        name: "email",
      });
      result.resultPassword = handleValidatePassword({
        password: informationUses.password,
        name: "password",
      });
      const email = result.resultEmail.error === true;
      const password = result.resultPassword.error === true;
      if (email && password) {
        result.resultEmail.isError = false;
        result.resultPassword.isError = false;
        // handleLogin()
        store.dispatch("handleAuthLogin", informationUses);
      } else {
        console.log("orror");
      }
    };
    const handleGetUsers = computed(() => {
      return store.getters["getUsers"];
    });
    const handleInput = (data) => {
      // if (result.resultEmail.name === "email") {
      //   result.resultEmail.isError = false;
      // }
      // if (result.resultPassword.name === "password") {
      //   result.resultPassword.isError = false;
      // }
      informationUses[data.name] = data.value;
    };
    const hadleInputPassworld = computed(() => {
      return refPassworld.value ? "password" : "text";
    });

    const HandleShoHidePasworld = () => {
      refPassworld.value = !refPassworld.value;
    };
    onMounted(() => {
      console.log("onMounted login");
    });
    onUpdated(() => {
      // console.log("onUpdated");
      // console.log(store.state);
    });

    return {
      informationUses,
      refPassworld,
      // errorInput,
      // errorMessage,
      result,
      handleValidateEmail,
      handleInput,
      HandleShoHidePasworld,
      handleAuthLogin,
      hadleInputPassworld,
      handleGetUsers,
    };
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
          text-align: center;
        }
      }
    }
  }
}
</style>