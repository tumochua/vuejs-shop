<template>
  <div id="app">
    <!-- <HeaderVue></HeaderVue>
    <HomeVue></HomeVue>
    <FooterVue></FooterVue> -->
    <router-view> </router-view>
  </div>
</template>

<script>
import { db } from "./configs/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { reactive } from "vue";
// import HeaderVue from "@/container/Header/index.vue";
// import FooterVue from "@/container/footer/Footer.vue";
// import HomeVue from "@/container/Home/index.vue";
export default {
  name: "AppVue",
  components: {
    // HeaderVue,
    // FooterVue,
    // HomeVue,
  },
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
  --colers: #ee4d2d;
  --color-primary: rgb(45, 164, 79);
  --color-border-focus-visible: #0969da;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
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
@keyframes logo {
  0% {
    /* opacity: 1; */
  }

  30% {
    /* opacity: 0.2; */
    fill: violet;
  }

  60% {
    /* opacity: 0.3; */
    fill: aqua;
  }
  90% {
    /* opacity: 0.4; */
    fill: darkorange;
  }
  100% {
    /* opacity: 0.5; */
    fill: var(--colers);
  }
}
</style>
