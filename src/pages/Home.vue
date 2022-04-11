<template>
  <div class="flex flex-col md:flex-row px-[8%] gap-10 pt-10 pb-20">
    <!-- left -->
    <div class="w-full max-w-full md:max-w-[260px] overflow-hidden shrink-0">
      <!-- todays deal -->
      <div>
        <todays-deal />
      </div>

      <!-- Bestseller Products -->
      <div class="pt-10">
        <best-seller />
      </div>

      <!-- Catgories -->
      <div class="pt-10">
        <cat-sidebar />
      </div>

      <!-- advertise-->
      <div class="pt-10">
        <ad-sidebar />
      </div>

      <!-- compare products-->
      <div class="pt-10">
        <compare-products />
      </div>

      <!-- testimonials -->
      <div class="pt-10">
        <testimonials />
      </div>

      <!-- testimonials -->
      <div class="pt-10">
        <blog-category />
      </div>
    </div>
    <!-- right -->
    <div class="grow shrink overflow-hidden">
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
          <h1 class="text-2xl font-bold text-[#333] mb-3">Medicine & Health</h1>
          <div class="flex flex-col md:flex-row mb-10 md:mb-0 md:gap-1">
            <span
              class="md:rounded-t p-2 bg-white text-[#333] border-l border-r border-t hover:bg-[#018bc8] hover:text-white"
            >
              Feminine Care
            </span>
            <span
              class="md:rounded-t p-2 bg-white text-[#333] border-l border-r border-t"
            >
              Food Care
            </span>

            <span
              class="md:rounded-t p-2 bg-white text-[#333] border-b border-l border-r border-t md:border-b-0"
            >
              Hair Care
            </span>
          </div>
          <example-slider />
          <div class="bg-white border-b border-l border-r p-5">
            <button
              type="button"
              class="whitespace-nowrap text-[#4ac4fa] bg-[#f8f8f8] hover:bg-[#018bc8] hover:text-[#f8f8f8] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdSidebar from "../components/AdSidebar.vue";
import BestSeller from "../components/BestSeller.vue";
import BlogCategory from "../components/BlogCategory.vue";
import CatSidebar from "../components/CatSidebar.vue";
import CompareProducts from "../components/CompareProducts.vue";
import ExampleSlider from "../components/ExampleSlider.vue";
import HeroSlider from "../components/HeroSlider.vue";
import Testimonials from "../components/Testimonials.vue";
import TodaysDeal from "../components/TodaysDeal.vue";

export default {
  components: {
    ExampleSlider,
    TodaysDeal,
    HeroSlider,
    BestSeller,
    CatSidebar,
    AdSidebar,
    CompareProducts,
    Testimonials,
    BlogCategory,
  },
};
</script>
