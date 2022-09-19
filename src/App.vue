<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import { db } from "./configs/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { reactive } from "vue";
export default {
  name: "AppVue",
  setup() {},
  async created() {
    const querySnapshot = await getDocs(collection(db, "transections"));
    querySnapshot.forEach((doc) => {
      let result = reactive([]);
      result = doc.data();
      console.log(result);
    });
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;

  height: 500px;
}
:root {
  --white-color: #fff;
  --black-color: #000;
  --text-color: #ccc;
  --text-size: 1.3rem;
  --header-height: 120px;
  /* btn */
  --btn-color: #ee4d2d;
}
html {
  font-size: 62.5%;
  line-height: 16px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.grid {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
/* @keyframes moveInleft {
  0% {
    opacity: 0.6;
    transform: translateX(0px);
    right: 10px;
  }
  100% {
    opacity: 1;
    transform: translate(-10px);
  }
} */
/* @keyframes moveInleft {
  0% {
    transform: rotate3d(0, 1, 0, 150deg) perspective(400px);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0deg) perspective(400px);
  }
} */

@-webkit-keyframes animateright {
}

@keyframes animateright {
  0% {
    transform: translate(-10px);
    opacity: 0;
  }
  100% {
    transform: translate(0px);
    opacity: 1;
  }
}
</style>
