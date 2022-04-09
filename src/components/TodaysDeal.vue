<template>
  <swiper
    :slides-per-view="1"
    :space-between="-1"
    navigation
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(n, i) in 1" :key="i">
      <product class="border" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  /* overflow-x: hidden;
  overflow-y: visible; */
  overflow: visible;
}

:deep .swiper-button-prev,
:deep .swiper-button-next {
  color: black;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: auto;
  top: -2%;
}

:deep .swiper-button-prev {
  left: 80%;
}

:deep .swiper-button-next {
  left: 90%;
}

:deep .swiper-button-next:after,
:deep .swiper-button-prev:after {
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
}
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
