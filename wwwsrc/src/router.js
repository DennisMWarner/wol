import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
// import Dashboard from "./views/Dashboard.vue";
import NewResistanceProgram from "./views/NewResistanceProgram.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: Dashboard,
    //   beforeEnter: authGuard
    // }
    {
      path: "/new-resistance-program",
      name: "NewResistanceProgram",
      component: NewResistanceProgram
    },
  ]
});
