import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: { name: "home" }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AdminView.vue"),
    children: [
      {
        path: "",
        redirect: { name: "home" }
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/Home/HomeView.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/User/UserIndex.vue"),
        children: [
          {
            path: "",
            redirect: { name: "user-list" }
          },
          {
            path: "list",
            name: "user-list",
            component: () => import("@/views/User/UserListView.vue")
          },
          {
            path: "create",
            name: "user-create",
            component: () => import("@/views/User/CreateUserView.vue")
          },
          {
            path: "detail/:id",
            name: "user-detail",
            component: () => import("@/views/User/UserDetailView.vue")
          },
          {
            path: "edit/:id",
            name: "user-edit",
            component: () => import("@/views/User/EditUserView.vue")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
