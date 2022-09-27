<template>
  <div>
    <input
      class="base__input"
      :placeholder="placeholder"
      :value="value"
      @input="onChangeValue"
      :type="type"
      ref="refPasworld"
    />
    <!-- <span class="input__wapper"> -->

    <!-- <span v-if="showHidlePasworld">
        <i
          v-show="showPasworld"
          class="fa-solid fa-eye-slash login__pasworld-icon"
          @click="HandleShoHidePasworld"
        ></i>
        <i
          v-show="hidePasworld"
          class="fa-solid fa-eye login__pasworld-icon"
          @click="HandleShoHidePasworld"
        ></i
      ></span> -->
    <!-- </span> -->
  </div>
</template>

<script>
import { ref } from "vue";
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
    // showHidlePasworld: {
    //   type: Boolean,
    // },
  },
  setup({ name }, { emit }) {
    const showPasworld = ref(true);
    const hidePasworld = ref(false);
    const refPasworld = ref(null);
    const onChangeValue = (e) => {
      // emit("onChangeValue");
      emit("onChangeValue", { name: name, value: e.target.value });
    };
    // const HandleShoHidePasworld = () => {
    //   hidePasworld.value = !hidePasworld.value;
    //   showPasworld.value = !showPasworld.value;

    //   emit("onChanShowHidePasworld");
    // };
    return {
      showPasworld,
      hidePasworld,
      refPasworld,
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