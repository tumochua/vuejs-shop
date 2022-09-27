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
              >Đăng Nhập</LabelVue
            ><br />
            <div class="register__infomation-form--body">
              <InputVue
                placeholder="Email/Số điện thoại/Tên đăng nhập"
                @onChangeValue="handleInput"
                name="email"
                :value="informationUses.email"
                class="register__input"
                type="email"
              ></InputVue>
              <span class="login__pasworld-wapper">
                <InputVue
                  placeholder="Mật Khẩu"
                  @onChangeValue="handleInput"
                  name="password"
                  :value="informationUses.password"
                  class="register__input"
                  type="password"
                  ref="refPasworld"
                ></InputVue>
                <i
                  v-show="showPasworld"
                  class="fa-solid fa-eye-slash login__pasworld-icon"
                  @click="HandleShoHidePasworld"
                ></i>
                <i
                  v-show="hidePasworld"
                  class="fa-solid fa-eye login__pasworld-icon"
                  @click="HandleShoHidePasworld"
                ></i>
              </span>
              <div>
                <ButtonVue
                  @onClickEvent="handleRegister"
                  :padding="10"
                  :BtnTextColor="true"
                  :fontSize="1.6"
                  class="register__buuton"
                  >ĐĂNG NHẬP</ButtonVue
                >
                <SpanVue :fontSize="1.2" :coler="true">Quên mật khẩu</SpanVue>
              </div>
              <span class="register__infomation-auth">
                <FaceBookVue></FaceBookVue>
                <GoogleVue></GoogleVue>
                <AppVue></AppVue>
              </span>
              <SpanVue :fontSize="1.2">
                Bạn mới biết đến Shopee?
                <span class="resigter__nav">Đăng ký</span>
              </SpanVue>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Cookies from "js-cookie";
import { ref, reactive } from "vue";
// import { handleApiRegister } from "@/api/index.js";
import ButtonVue from "@/components/button/Button.vue";
import InputVue from "@/components/input/Input.vue";
import LabelVue from "@/components/label/Lable.vue";
import FaceBookVue from "@/components/auth/FaceBook.vue";
import GoogleVue from "@/components/auth/Google.vue";
import AppVue from "@/components/auth/App.vue";
import SpanVue from "@/components/span/Span.vue";

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
  },
  setup() {
    const informationUses = reactive({
      email: "",
      password: "",
    });
    const showPasworld = ref(true);
    const hidePasworld = ref(false);
    const refPasworld = ref(null);

    const handleRegister = async () => {
      try {
        let data = await "handleApiRegister(informationUses)";
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
    const onChanShowHidePasworld = () => {
      hidePasworld.value = !hidePasworld.value;
      showPasworld.value = !showPasworld.value;
      // refPasworld.value.type = "text";
      // console.log((refPasworld.value.type = "text"));
    };

    return {
      informationUses,
      showPasworld,
      hidePasworld,
      refPasworld,
      handleRegister,
      handleInput,
      onChanShowHidePasworld,
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