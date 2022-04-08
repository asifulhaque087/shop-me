<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Product from "./Product.vue";
export default {
  components: { Carousel, Slide, Pagination, Navigation, Product },
  data() {
    return {
      settings: {
        // infinite: true,
        wrapAround: true,
        itemsToShow: 1,
        itemsToScroll: 1,
        // nextArrow: <Arrow type="next" />,
        // prevArrow: <Arrow type="prev" />,
        // autoplay: true,
        transition: 500,
        // speed: 500,
        // autoplaySpeed: 2500,
        autoplay: 2500,
        // cssEase: "easeOutElastic",
        // cssEase: "ease-out",
        // cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        // useTransform: true,
        pauseAutoplayOnHover: true,
        mouseDrag: true,

        breakpoints: {
          480: {
            itemsToShow: 1,
          },

          640: {
            itemsToShow: 2,
          },

          768: {
            itemsToShow: 3,
          },

          1024: {
            itemsToShow: 4,
          },
          1280: {
            itemsToShow: 5,
          },
        },
      },
    };
  },
};
</script>

<template>
  <carousel :settings="settings" class="mx-10">
    <slide v-for="(slide, index) in 10" :key="slide">
      <div>
        <product v-if="index === 9" :location="true" />
        <product v-else />
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style>
.carousel__item {
  /* height: 200px; */
  /* width: 100%; */
  /* background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.carousel__slide {
  /* padding: 10px; */
}

.carousel__prev,
.carousel__next {
  /* box-sizing: content-box; */
  border: 5px solid yellow;
  /* position: absolute; */
  /* top: 100%; */
  /* background-color: yellow; */
}
</style>
