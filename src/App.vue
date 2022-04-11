<script>
import TopHeader from "./components/TopHeader.vue";
import MiddleHeader from "./components/MiddleHeader.vue";
import BottomHeader from "./components/BottomHeader.vue";
import ExampleSlider from "./components/ExampleSlider.vue";
import TodaysDeal from "./components/TodaysDeal.vue";
import HeroSlider from "./components/HeroSlider.vue";
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";
import ShoppingCart from "./pages/ShoppingCart.vue";
import Profile from "./pages/Profile.vue";

export default {
  components: {
    MiddleHeader,
    TopHeader,
    BottomHeader,
    ExampleSlider,
    TodaysDeal,
    HeroSlider,
    Footer,
    Home,
    ShoppingCart,
    Profile,
  },
};
</script>

<template>
  <div>
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <top-header />
    <middle-header />
    <bottom-header />
    <!-- <Home/> -->
    <!-- <profile/> -->
    <router-view />
    <!-- <shopping-cart/> -->
    <!-- footer -->
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* min-height: 300vh; */
  background-color: #f8f8f8;
}
</style>

//
<script setup>
//   import HelloWorld from "./components/HelloWorld.vue";
//   import TopHeader from "./components/TopHeader.vue";
//
</script>
