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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
