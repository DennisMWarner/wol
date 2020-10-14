import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import CurrentProgram from "./views/CurrentProgram.vue";

// @ts-ignore
import NewProgram from "./views/NewProgram.vue";


import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/current-program",
      name: "current-program",
      component: CurrentProgram,
      beforeEnter: authGuard
    },
    {
      path: "/new-program",
      name: "new-program",
      component: NewProgram,
      beforeEnter: authGuard
    },

    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: Dashboard,
    //   beforeEnter: authGuard
    // }

  ]
});
