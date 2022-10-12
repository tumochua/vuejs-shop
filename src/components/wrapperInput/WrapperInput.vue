<template>
  <!-- {{ userData }} -->
  <div class="input__wappper">
    <LableVue class="input__wappper-lable">{{ placeholder }}</LableVue> <br />
    <input
      :placeholder="placeholder"
      class="input__wappper-item"
      :value="value"
      @input="onChangeValue"
    />
    <br />
    <ErrorTextVue
      v-if="errorMessage"
      :errorMessage="errorMessage"
      class="input__wappper-error"
      :fontSize="fontSize"
      >{{ messageError }}
    </ErrorTextVue>
    {{ errorMessage }}
  </div>
</template>

<script>
import { onUpdated, onMounted } from "vue";
import LableVue from "../label/Lable.vue";
import ErrorTextVue from "../error/ErrorText.vue";
export default {
  name: "WrapperInput",
  components: {
    LableVue,
    ErrorTextVue,
  },
  props: {
    placeholder: {
      type: String,
    },
    errorMessage: {
      type: Boolean,
    },
    fontSize: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    messageError: {
      type: String,
    },
    userData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup({ name, userData }, { emit }) {
    // errorMessage = false;
    const onChangeValue = (e) => {
      // console.log("update");
      emit("onChangeValue", { name: name, value: e.target.value });
      // emit("onChangeValue");
    };
    onMounted(() => {}),
      onUpdated(() => {
        console.log("check", userData);
      });
    return {
      onChangeValue,
    };
    // HandleShoHidePasworld,
  },
};
</script>

<style scoped lang="scss">
.input__wappper {
  .input__wappper-lable {
    // margin-left: 5px;
    // text-align: start !important;
  }
  .input__wappper-item {
    margin: 7px 0px;
    padding: 1.2rem;
    width: 100%;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 2px;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.54);
    }
  }
  .input__wappper-error {
    margin-left: 4px;
  }
}
</style>