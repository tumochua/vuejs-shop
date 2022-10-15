<template>
  <div class="toast__wapper" v-if="isToast">
    <div>
      <i :class="handleChangeIcon" class="toast__wapper--icon"></i>
    </div>
    <div class="toast__wapper--body">
      <slot name="body"></slot>
    </div>
    <div @click="handleCloseToast">
      <!-- <i :class="handleChangeIcon"></i> -->
      <i class="fa-solid fa-xmark toast__wapper--icon-close"></i>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, onBeforeUpdate, ref } from "vue";
export default {
  components: {},
  name: "ToastVue",
  props: {
    isToast: {
      type: Boolean,
      default() {
        return false;
      },
    },
    dateTimes: {
      type: Number,
    },
    icon: {
      type: String,
    },
    handleChangeIcon: {},
  },
  setup({ dateTimes }, { emit }) {
    const clear = ref();
    // const handleClick = () => {
    //   isToast.value = !isToast.value;
    // };
    onMounted(() => {
      // setTimeout(() => {
      //   emit("handleCloseToast");
      // }, dateTimes);
    });
    onBeforeUpdate(() => {
      clearInterval(clear.value);
    });
    onUpdated(() => {
      clear.value = setTimeout(() => {
        emit("handleCloseToast");
      }, dateTimes);
    });

    const handleCloseToast = () => {
      emit("handleCloseToast");
    };
    return {
      // handleClick
      handleCloseToast,
    };
  },
};
</script>

<style scoped lang="scss">
.toast__wapper {
  display: flex;
  width: 300px;
  height: 65px;
  border-radius: 2px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-left: 4px solid aqua;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
  // border: 2px solid aqua;
  position: fixed;
  top: 10px;
  right: 40%;
  background: var(--white-color);
  // -webkit-animation: fadeOut ease 0.2s;
  animation: fadein ease 0.2s;

  .toast__wapper--icon {
    width: 20px;
    height: 20px;
  }
  .toast__wapper--body {
    :slotted(.toast__title) {
      font-size: 1.6rem !important;
      font-weight: 600 !important;
    }
    :slotted(.toast__description) {
      font-size: 1.3rem;
    }
  }
  .toast__wapper--icon {
    font-size: 1.7rem;
    cursor: pointer;
  }
  .toast__wapper--icon-close {
    font-size: 1.7rem;
    cursor: pointer;
  }
  .toast__wapper--icon-warning {
    font-size: 1.7rem;
    cursor: pointer;
    color: gold;
  }
  .toast__wapper--icon-success {
    font-size: 1.7rem;
    cursor: pointer;
    color: #71be34;
  }
}

@keyframes fadein {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// @keyframes fadeOut {
//   to {
//     opacity: 0;
//   }
// }
</style>