<template>
  <header class="header-container">
    <div class="header-container-top">
      <div class="header-container-top-right">
        <div class="header-container-top-ctn">
          <ul class="header-container-top-wapper">
            <li class="header-container-top-wapper-item header-boder-after">
              Kênh Người Bán
            </li>
            <li class="header-container-top-wapper-item header-boder-after">
              Trở thành Người bán Shopee
            </li>
            <li
              class="header-container-top-wapper-item handle-model"
              @mouseover="handleMouseover"
            >
              Tải ứng dụng
              <div class="model-download">header qr</div>
              <!-- <div v-if="isShow" class="model-download">header qr</div> -->
            </li>
            <li
              class="
                header-container-top-wapper-item
                custom-connect
                header-boder-before
              "
            >
              Kết nối
              <i class="fa-brands fa-facebook header-left-icons"></i>
              <i class="fa-brands fa-instagram header-left-icons"></i>
            </li>
          </ul>
        </div>
        <div>
          <ul class="header-container-top-wapper">
            <li class="header-container-top-wapper-item">
              <i class="header-right-icons fa-solid fa-circle-question"></i>
              Thông Báo
            </li>
            <li class="header-right-icons header-container-top-wapper-item">
              <i class="header-right-icons fa-solid fa-circle-question"></i>
              Hỗ Trợ
            </li>
            <li class="header-right-icons header-container-top-wapper-item">
              <i class="header-right-icons fa-solid fa-globe"></i>
              Tiếng Việt
              <i class="header-right-icon fa-solid fa-caret-down"></i>
            </li>
            <li
              class="
                header-right-icons
                header-container-top-wapper-item
                header-boder-after
              "
            >
              Đăng Ký
            </li>
            <li class="header-right-icons header-container-top-wapper-item">
              Đăng Nhập
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import { ref, onMounted } from "vue";
export default {
  name: "HomeContent",
  components: {},

  setup() {
    // const isMounted = ref(false);
    // const isShow = ref(false);
    // onMounted(() => {
    //   isMounted.value = true;
    // });
    // const handleMouseover = () => {
    //   isShow.value = !isShow.value;
    // };
    // return { isMounted, isShow, handleMouseover };
  },
};
</script>

<style scoped lang="scss">
.header-container {
  color: var(--white-color);
  height: var(--header-height);
  font-size: var(--text-size);
  background-image: linear-gradient(0, #fe6433, #f53e2d);
  font-weight: 300;
  .header-container-top {
    width: 1200px;
    margin: 0 auto;
    .header-container-top-right {
      align-items: center;
      display: flex;
      justify-content: space-between;
      height: 3.4rem;
      .header-container-top-ctn {
        margin-left: -10px !important;
      }
      .header-container-top-wapper {
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        .header-container-top-wapper-item {
          cursor: pointer;
          margin-left: 5px;
          &:hover {
            opacity: 0.7;
          }

          .afterBorder {
            border-left: 2px solid var(--white-color);
            margin-left: 11px;
            opacity: 0.4;
          }
          .header-left-icons {
            margin-right: 10px;
            font-size: 1.5rem;
            margin-left: 4px;
          }
          .header-right-icons {
            font-size: 1.4rem;
            margin-left: 11px;
            margin-right: 3px;
          }
          .header-right-icon {
            font-size: 1.4rem;
            margin-right: 11px;
          }
        }
        .custom-connect {
          .header-left-icons {
            &:hover {
              opacity: 0.7;
            }
          }
          &:hover {
            opacity: 1;
            cursor: default;
          }
        }
        .header-boder-after {
          &:after {
            content: "";
            border-left: 2px solid var(--white-color);
            opacity: 0.4;
            margin-left: 6px;
            right: -10px;
            top: 0px;
          }
        }
        .header-boder-before {
          &::before {
            content: "";
            border-left: 2px solid var(--white-color);
            opacity: 0.4;
            margin-right: 6px;
            right: -10px;
            top: 0px;
          }
        }
        .handle-model {
          position: relative;
          &:hover {
            .model-download {
              display: block;
            }
          }
          .model-download {
            display: none;
            position: absolute;
            right: 0;
            left: 0;
            top: 26px;
            z-index: 2;
            width: 183px;
            background-color: violet;
            height: 100px;
          }
        }
        .handle-model::before {
          content: "";
          position: absolute;
          width: 100%;
          top: 10px;
          height: 20px;
        }
      }
    }
  }
}
</style>