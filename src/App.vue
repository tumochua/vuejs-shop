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
  font-family: Helvetica Neue, Helvetica, Arial, 文泉驛正黑, WenQuanYi Zen Hei,
    Hiragino Sans GB, 儷黑 Pro, LiHei Pro, Heiti TC, 微軟正黑體,
    Microsoft JhengHei UI, Microsoft JhengHei, sans-seri;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --white-color: #fff;
  --black-color: #000;
  --text-color: #ccc;
}
html {
  font-size: 62.5%;
  line-height: 16px;
}
</style>
