// import LayoutContent from "@/layout/LayoutContent";
import HomeVue from "@/views/Home/index.vue";
import RegisterVue from "@/views/auth/Register.vue";
import LoginVue from "@/views/auth/Login.vue";
import DetailVue from "@/views/ProductionDetail/index.vue";
import PrivateVue from "@/views/private/Private.vue";
import FromTest from "./components/test/FromTest.vue";
import MyAdmin from "@/container/admin/MyAdmin.vue";
import MyShipper from "./container/shipper/MyShipper.vue";
import MySalesman from "./container/salesman/MySalesman.vue";

import ProfileUser from "./container/profile/ProfileUser.vue";
import MyUsers from "./container/profile/MyUsers.vue";
import MyEditUser from "./container/profile/MyEditUser.vue";
import MyLeaderboard from "./container/profile/MyLeaderboard.vue";
import MyOrders from "./container/profile/MyOrders.vue";
import MyProducts from "./container/profile/MyProducts.vue";
import MySalesReport from "./container/profile/MySalesReport.vue";
import MyMessage from "./container/profile/MyMessage.vue";
import MySettings from "./container/profile/MySettings.vue";
import MyFavourite from "./container/profile/MyFavourite.vue";
import MyHistory from "./container/profile/MyHistory.vue";
import MySignout from "./container/profile/MySignout.vue";

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
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = Cookies.get("token");
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: MyAdmin,
    beforeEnter(to, from, next) {
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = Cookies.get("token");
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/shipper",
    name: "shipper",
    component: MyShipper,
    beforeEnter(to, from, next) {
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = Cookies.get("token");
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/salesman",
    name: "Salesman",
    component: MySalesman,
    beforeEnter(to, from, next) {
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = Cookies.get("token");
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/profile/admin/:id",
    name: "ProfileUser",
    component: ProfileUser,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },

  {
    path: "/users/page/:id",
    name: "MyUsers",
    component: MyUsers,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },

  {
    path: "/user/edit/:id",
    name: "MyEditUser",
    component: MyEditUser,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },

  {
    path: "/profile/admin/leaderboard",
    name: "MyLeaderboard",
    component: MyLeaderboard,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/order",
    name: "MyOrders",
    component: MyOrders,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/prodicts",
    name: "MyProducts",
    component: MyProducts,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/salesseport",
    name: "MySalesReport",
    component: MySalesReport,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/message",
    name: "MyMessage",
    component: MyMessage,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/settings",
    name: "MySettings",
    component: MySettings,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/favourite",
    name: "MyFavourite",
    component: MyFavourite,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/history",
    name: "MyHistory",
    component: MyHistory,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile/admin/signout",
    name: "MySignout",
    component: MySignout,
    beforeEnter(to, from, next) {
      // const checkToken = Cookies.get("token");
      // if (checkToken) {
      //   next();
      // } else {
      //   next("/login");
      // }
      if (
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).data.admin === 5
      ) {
        next();
      } else {
        next("/");
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
