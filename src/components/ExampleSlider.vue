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
      pauseOnMouseEnter: true,
    }"
    class="default-slider box-border"
  >
    <swiper-slide
      v-for="(n, i) in 7"
      :key="i"
      class="border-t border-b border-l"
      :class="{ 'border-r': i == 6 }"
    >
      <product :product="product" />
    </swiper-slide>
  </swiper>
</template>

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
      product: {
        id: 1,
        title: " Metus nulla facilisi, Original 24 fl oz ",
        description:
          "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
        price: 650.9,
        image_tag:
          "https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/04/1-5-350x350.jpg",
        quantity: 1,
      },
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

<style scoped>
.swiper {
  overflow: visible;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: black;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: auto;
  top: -10px;
  background-color: white;
}

:deep(.swiper-button-prev) {
  left: 90%;
}

:deep(.swiper-button-next) {
  left: 95%;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
}

@media (max-width: 768px) {
  :deep(.swiper-button-prev) {
    left: 80%;
  }
  :deep(.swiper-button-next) {
    left: 90%;
  }
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
