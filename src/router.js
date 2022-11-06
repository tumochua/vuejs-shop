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
import MyProduction from "./container/salesman/MyProduction.vue";
import MyDetailProduct from "./container/product/MyDetailProduct.vue";

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

import MyUsersProFile from "./container/users/MyUsersProFile.vue";

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
      const checkToken = handleCheckToken();
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
      const checkToken = handleCheckToken();
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/shipper/:id",
    name: "Shipper",
    component: MyShipper,
    beforeEnter(to, from, next) {
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = handleCheckToken();
      const checkRole = handleCheckRoleShipper();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/salesman/:id",
    name: "Salesman",
    component: MySalesman,
    beforeEnter(to, from, next) {
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = handleCheckToken();
      const checkRole = handleCheckSalesman();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/production/users/:id",
    name: "Production",
    component: MyProduction,
    beforeEnter(to, from, next) {
      // console.log("to", to);
      // console.log("from", from);
      const checkToken = handleCheckToken();
      const checkRole = handleCheckSalesman();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/detail/production/:id",
    name: "DetailProduct",
    component: MyDetailProduct,
    // beforeEnter(to, from, next) {
    //   // console.log("to", to);
    //   // console.log("from", from);
    //   const checkToken = handleCheckToken();
    //   const checkRole = handleCheckSalesman();
    //   if (checkToken) {
    //     if (checkRole) {
    //       next();
    //     } else {
    //       next("/");
    //     }
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
  },

  {
    path: "/profile/admin/:id",
    name: "ProfileUser",
    component: ProfileUser,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();

      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/users/:id",
    name: "MyUsersProFile",
    component: MyUsersProFile,
    beforeEnter(to, from, next) {
      const checkToken = handleCheckToken();
      if (checkToken) {
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/users/page/:id",
    name: "MyUsers",
    component: MyUsers,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/user/edit/:id",
    name: "MyEditUser",
    component: MyEditUser,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/profile/admin/leaderboard",
    name: "MyLeaderboard",
    component: MyLeaderboard,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/order",
    name: "MyOrders",
    component: MyOrders,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/prodicts",
    name: "MyProducts",
    component: MyProducts,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/salesseport",
    name: "MySalesReport",
    component: MySalesReport,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/message",
    name: "MyMessage",
    component: MyMessage,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/settings",
    name: "MySettings",
    component: MySettings,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/favourite",
    name: "MyFavourite",
    component: MyFavourite,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/history",
    name: "MyHistory",
    component: MyHistory,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/profile/admin/signout",
    name: "MySignout",
    component: MySignout,
    beforeEnter(to, from, next) {
      const checkRole = handleCheckRoleAdmin();
      const checkToken = handleCheckToken();
      if (checkToken) {
        if (checkRole) {
          next();
        } else {
          next("/");
        }
        next();
      } else {
        next("/login");
      }
    },
  },

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
const number =
  JSON.parse(localStorage.getItem("user")) &&
  JSON.parse(localStorage.getItem("user")).data.positionId;
const roleCookies = Cookies.get("token");

function handleCheckToken() {
  return roleCookies ? true : false;
}

function handleCheckRoleAdmin() {
  const roleLocal = +number === 5;
  // console.log("roleLocal", roleLocal);
  return roleLocal ? true : false;
}

function handleCheckRoleShipper() {
  const roleLocal = +number === 2;
  return roleLocal ? true : false;
}

function handleCheckSalesman() {
  const roleLocal = +number === 1;

  return roleLocal ? true : false;
}

export default router;
