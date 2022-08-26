// import LayoutContent from "@/layout/LayoutContent";
import HomeVue from "@/views/Home/index.vue";

import NotFound from "./NotFound/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomeVue },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
