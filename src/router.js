// import LayoutContent from "@/layout/LayoutContent";
import HomeVue from "@/views/Home/index.vue";
import RegisterVue from "@/views/auth/Register.vue";
import LoginVue from "@/views/auth/Login.vue";
import DetailVue from "@/views/ProductionDetail/index.vue";
import PrivateVue from "@/views/private/Private.vue";
import FromTest from "./components/test/FromTest.vue";

import NotFound from "./NotFound/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";

const routes = [
  { path: "/", name: "Home", component: HomeVue },
  { path: "/register", name: "Register", component: RegisterVue },
  {
    path: "/login",
    name: "Login",
    component: LoginVue,
  },
  { path: "/detail/:id", name: "Detail", component: DetailVue },
  { path: "/from", component: FromTest },
  {
    path: "/private",
    name: "Private",
    component: PrivateVue,
    beforeEnter(to, from, next) {
      const checkToken = Cookies.get("token");
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },
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
// router.beforeEach((to, from, next) => {
//   console.log("beforeEach");
//   next();
// });

export default router;
