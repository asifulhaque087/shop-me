import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
import Profile from "../pages/Profile.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
    name: "cart",
  },
  {
    path: "/profile",
    component: Profile,
    name: "profile",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
