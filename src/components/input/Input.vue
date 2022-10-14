<template>
  <div>
    <input
      class="base__input"
      :placeholder="placeholder"
      :value="value"
      @input="onChangeValue"
      :type="type"
      :class="{
        'error-border': errorInput,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "InputVue",
  components: {},
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
    type: {
      type: String,
      default() {
        return "text";
      },
    },
    errorInput: {
      type: Boolean,
    },
    require: {
      type: Boolean,
      default() {
        return false;
      },
    },
    // showHidlePasworld: {
    //   type: Boolean,
    // },
  },
  setup({ name }, { emit }) {
    const onChangeValue = (e) => {
      emit("onChangeValue", { name: name, value: e.target.value });
      // emit("onChangeValue");
    };
    return {
      onChangeValue,
    };
    // HandleShoHidePasworld,
  },
};
</script>

<style scoped lang="scss">
.base__input {
  padding: 12px;
  border: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  box-shadow: rgba 0 2px 0 (0 0 0/2%);
  width: 100%;
}
.error-border {
  border: 1px solid var(--colers);
}
.input__wapper {
  // position: relative;

  // .login__pasworld-icon {
  //   position: absolute;
  //   right: 0;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   cursor: pointer;
  //   width: 20px;
  //   cursor: pointer;
  // }
}
</style> 