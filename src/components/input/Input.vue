<template>
  <div>
    <input
      v-if="!mutiline"
      class="base__input"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :value="value"
      @input="onChangeValue"
      :type="type"
      :class="{
        'error-border': errorInput,
        'is-disabled': isDisabled,
      }"
    />
    <textarea
      v-if="mutiline"
      class="form-controll"
      :placeholder="placeholder"
      :value="value"
      @input="onChangeValue"
    ></textarea>
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
    mutiline: {
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
  margin-top: 3px;
  margin-bottom: 3px;
  &:focus {
    border: 1px solid var(--color-border-focus-visible);
  }
}
.error-border {
  border: 1px solid var(--colers);
}
.is-disabled {
  cursor: no-drop;
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

.form-controll {
  height: 100px;
  padding: 3px;
  border: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  box-shadow: rgba 0 2px 0 (0 0 0/2%);
  width: 100%;
  margin-top: 3px;
  margin-bottom: 3px;
  &:focus {
    border: 1px solid var(--color-border-focus-visible);
  }
}
</style> 