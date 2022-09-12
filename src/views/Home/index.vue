<template>
  <div>
    <layout-content-vue>
      <template v-slot:header>
        <header-vue></header-vue>
      </template>
      <home-conent></home-conent>
      <template v-slot:footer>
        <footer-vue></footer-vue>
      </template>
    </layout-content-vue>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { getHome } from "@/api/index.js";
// import http from "../../http-common.js";
// import axios from "axios";
import LayoutContentVue from "@/layout/LayoutContent.vue";
import HeaderVue from "@/container/Header/index.vue";
import FooterVue from "@/container/footer/Footer.vue";
import HomeConent from "@/container/Home/index.vue";

export default {
  name: "HomeVue",
  components: {
    LayoutContentVue,
    HeaderVue,
    FooterVue,
    HomeConent,
  },
  setup() {
    // let idRouter = ref("");
    // idRouter = router;
    // console.log(idRouter);
    // return { idRouter };
    onMounted(async () => {
      try {
        let data = await getHome();
        console.log("check data", data);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>

<style>
</style>