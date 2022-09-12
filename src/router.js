// import LayoutContent from "@/layout/LayoutContent";
import HomeVue from "@/views/Home/index.vue";
import RegisterVue from "@/views/Login/Register.vue";
import DetailVue from "@/views/ProductionDetail/index.vue";

import NotFound from "./NotFound/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomeVue },
  { path: "/login", name: "Login", component: RegisterVue },
  { path: "/detail/:id", name: "detail", component: DetailVue },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: News,
  //   children: [{
  //     path: ':id',
  //     name: 'newsitem',
  //     component: Newsitem,
  //   }]
  // },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
