import { createWebHistory, createRouter } from "vue-router";
import HomeHome from "./components/HomeHome.vue";
import ProfileProfile from "./components/ProfileProfile.vue";
import LoginLogin from "./components/LoginLogin.vue";
import EhsanProfile from "./components/EhsanProfile.vue";
import AwaisProfile from "./components/AwaisProfile.vue";
import AhmadProfile from "./components/AhmadProfile.vue";

const routes = [
  {
    name: "HomeHome",
    path: "/",
    component: HomeHome,
  },
  {
    name: "LoginLogin",
    path: "/login",
    component: LoginLogin,
  },
  {
    name: "ProfileProfile",
    path: "/Profile",
    component: ProfileProfile,
  },

  // {
  //   name:"ProfileProfile",
  //   path:"/profile/:name",
  //   component:ProfileProfile
  // },
  {
    name: "EhsanProfile",
    path: "/Profile/Ehsan",
    component: EhsanProfile,
  },
  {
    name: "AwaisProfile",
    path: "/Profile/Awais",
    component: AwaisProfile,
  },
  {
    name: "AhmadProfile",
    path: "/Profile/Ahmad",
    component: AhmadProfile,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
