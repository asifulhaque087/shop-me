<script>
import TopHeader from "./components/TopHeader.vue";
import MiddleHeader from "./components/MiddleHeader.vue";
import BottomHeader from "./components/BottomHeader.vue";
import ExampleSlider from "./components/ExampleSlider.vue";

export default {
  components: { MiddleHeader, TopHeader, BottomHeader, ExampleSlider },
};
</script>

<template>
  <div>
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <top-header />
    <middle-header />
    <bottom-header />
    <div class="flex px-[8%] gap-10">
      <!-- left -->
      <div class="w-[300px] shrink-0 bg-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam vel
        quisquam totam incidunt exercitationem voluptatem nisi ea est nihil
        fugit quos, voluptate impedit facilis a laborum placeat repellat optio
        sit eveniet nesciunt suscipit mollitia illum. Obcaecati dignissimos
        provident quisquam magni neque itaque debitis adipisci, porro saepe
        necessitatibus assumenda ipsa sit facere ad. Inventore commodi vitae
        quisquam repellendus. Minima maxime hic molestias provident tempore sit
        suscipit, magni nobis porro itaque? Nulla suscipit quasi eaque quos,
        libero natus voluptatem ducimus nostrum ea explicabo quibusdam
        necessitatibus voluptate officiis vitae tenetur temporibus, nihil culpa
        hic sed error voluptates, minus voluptatibus porro quas! Adipisci.
      </div>
      <!-- right -->
      <div class="grow">
        <example-slider />
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
}
</style>

//
<script setup>
//   import HelloWorld from "./components/HelloWorld.vue";
//   import TopHeader from "./components/TopHeader.vue";
//
</script>
