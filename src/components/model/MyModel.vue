<template>
  <div v-if="isShow">
    <div class="modal__wapper" @click.self="handleHideModal">
      <div class="modal__body">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModel",
  props: {
    isShow: {
      type: Boolean,
    },
  },
  setup(_, { emit }) {
    const handleHideModal = () => {
      emit("handleHideModal");
    };
    return { handleHideModal };
  },
};
</script>

<style scoped lang="scss">
.modal__wapper {
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  .modal__body {
    padding: 15px;
    width: 500px;
    background-color: #fff;
    position: absolute;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.3rem;
    animation: animatezoom 0.6s;
    @keyframes animatezoom {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>