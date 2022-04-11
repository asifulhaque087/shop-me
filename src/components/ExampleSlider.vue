<template>
  <swiper
    :slides-per-view="1"
    :space-between="-1"
    :breakpoints="breakpoints"
    navigation
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="default-slider box-border"
  >
    <swiper-slide
      v-for="(n, i) in 7"
      :key="i"
      class="border-t border-b border-l"
      :class="{ 'border-r': i == 6 }"
    >
      <product />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  overflow: visible;
}
:deep .swiper-button-prev,
:deep .swiper-button-next {
  color: black;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: auto;
  top: -2%;
  background-color: white;
}

:deep .swiper-button-prev {
  left: 90%;
}

:deep .swiper-button-next {
  left: 95%;
}

:deep .swiper-button-next:after,
:deep .swiper-button-prev:after {
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
}

/* .default-slider .swiper-slide {
  display: flex;
  height: 300px !important;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: 700;
}
.swiper-slide:nth-child(1n) {
  background-color: palevioletred;
}
.swiper-slide:nth-child(2n) {
  background-color: skyblue;
}
.swiper-slide:nth-child(3n) {
  background-color: peru;
}
.swiper-slide:nth-child(4n) {
  background-color: cadetblue;
}
.swiper-slide:nth-child(5n) {
  background-color: plum;
}
.swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}
.swiper-slide:nth-child(7n) {
  background-color: palegreen;
} */
</style>

<script>
import SwiperCore, { Navigation, Autoplay } from "swiper";
import Product from "./Product.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
    Product,
  },
  data() {
    return {
      breakpoints: {
        420: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
          // spaceBetween: 10,
        },
      },
    };
  },
  methods: {
    onSwiper: function () {
      console.log("onSwiper called");
    },
    onSlideChange: function () {
      console.log("Slide change");
    },
  },
};
</script>
