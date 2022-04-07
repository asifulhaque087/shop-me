
<script>
import TopHeader from './components/TopHeader.vue';
import MiddleHeader from './components/MiddleHeader.vue';

export default {
  components: { MiddleHeader, TopHeader },

}

</script>

<template>
  <div>
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <top-header />
    <middle-header />

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>


// <script setup>
//   import HelloWorld from "./components/HelloWorld.vue";
//   import TopHeader from "./components/TopHeader.vue";
// </script>