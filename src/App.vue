<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
// import { analytics } from "./configs/firebase.js";
// import { doc, getDoc } from "firebase/firestore";
import { db } from "./configs/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { reactive } from "vue";
export default {
  name: "AppVue",
  setup() {
    // const db = getFirestore();
    // const colRef = collection(db, "transections");
    // console.log("check collection", db);
    // const docRef = doc(analytics, "transections", "SF");
    // const docSnap = getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    // console.log(analytics);
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "transections"));
    querySnapshot.forEach((doc) => {
      let result = reactive([]);
      result = doc.data();
      console.log(result);
      // console.log("check doc", doc);
      // console.log("check collection", doc.data());
      // console.log("check collection name", doc.type);
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
