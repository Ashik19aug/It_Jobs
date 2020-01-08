import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/companies",
    name: "companies",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/companies.vue")
  },
  {
    path: "/User",
    name: "User",
    component: () =>
      import("../views/User.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
