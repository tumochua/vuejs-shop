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
</style>
