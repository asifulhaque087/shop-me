import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
import Profile from "../pages/Profile.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
