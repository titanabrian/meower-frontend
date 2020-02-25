/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import PostDetails from "@/views/PostDetails.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/404.vue";

//Midleware
import isLogin from "@/middleware/authmiddleware";


Vue.use(VueRouter);

const routes = [
  {
    path:"*",
    name:"not_found",
    component:NotFound
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta:{
      middleware:[
        isLogin,
      ]
    }
  },
  {
    path: "/post/:id",
    name: "post.detail",
    component: PostDetails,
    meta:{
      middleware:[
        isLogin,
      ]
    }
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
