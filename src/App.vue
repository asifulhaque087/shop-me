<script>
import TopHeader from "./components/TopHeader.vue";
import MiddleHeader from "./components/MiddleHeader.vue";
import BottomHeader from "./components/BottomHeader.vue";
import ExampleSlider from "./components/ExampleSlider.vue";
import TodaysDeal from "./components/TodaysDeal.vue";
import HeroSlider from "./components/HeroSlider.vue";

export default {
  components: {
    MiddleHeader,
    TopHeader,
    BottomHeader,
    ExampleSlider,
    TodaysDeal,
    HeroSlider,
  },
};
</script>

<template>
  <div>
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <top-header />
    <middle-header />
    <bottom-header />
    <div class="flex px-[8%] gap-10 pt-10">
      <!-- left -->
      <div class="w-[300px] shrink-0 bg-red-500">
        <!-- todays deal -->
        <!-- <todays-deal /> -->
      </div>
      <!-- right -->
      <div class="grow shrink basis-0 overflow-hidden">
        <div class="">
          <!-- hero -->
          <hero-slider />
          <!-- banner -->
          <div class="flex items-center gap-5 py-10">
            <!-- left -->
            <div>
              <img
                src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/04/banner_img_1.jpg"
                alt=""
              />
            </div>
            <!-- right -->

            <div>
              <img
                src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/04/banner_img_2.jpg"
                alt=""
              />
            </div>
          </div>
          <!-- Medicine & Health -->
          <div>
            <example-slider />
          </div>
        </div>
      </div>
    </div>
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
  min-height: 300vh;
  background-color: #f8f8f8;
}
</style>

//
<script setup>
//   import HelloWorld from "./components/HelloWorld.vue";
//   import TopHeader from "./components/TopHeader.vue";
//
</script>
