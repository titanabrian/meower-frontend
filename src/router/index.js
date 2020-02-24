/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import PostDetails from "@/views/PostDetails.vue";
import Login from "@/views/Login.vue";

//Midleware
import AuthMiddleware from "@/middleware/authmiddleware";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta:{
      middleware:[
        AuthMiddleware
      ]
    }
  },
  {
    path: "/post/:id",
    name: "post.detail",
    component: PostDetails
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
