<template>
  <div class="px-8 bg-white">
    <a href="{`/product/${id}`}">
      <div class="rounded-tl rounded-tr mb-1 relative cursor-pointer">
        <span
          class="inline-block rounded-full text-white bg-green-500 px-2 py-1 text-xs font-bold mr-3 absolute top-3 left-2"
        >
          no sell
        </span>

        <div class="relative group">
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/04/1-5-350x350.jpg"
            height="1080"
            width="1920"
            alt="product"
            class=""
          />

          <button
            type="button"
            class="hidden group-hover:block whitespace-nowrap absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white bg-stone-400 hover:bg-stone-500 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Quick View
          </button>
        </div>
        <div class="py-2">
          <p class="capitalize text-gray-500 text-xs py-3">
            <!-- Metus nulla facilisi, Original 24 fl oz -->
            {{ product && product.title }}
          </p>
          <div class="py-2 flex justify-between">
            <!-- left -->
            <div>
              <span class="font-bold text-secondary-color text-xl">
                €{{ product && product.price || 10 }}
              </span>
              <span class="text-gray-300 font-medium">
                <span class="line-through">€3</span>
                <!-- <span class="text-gray-400 text-xs"> 8% </span> -->
              </span>
            </div>
            <!-- right -->
            <div class="flex items-center">
              <fa icon="star" class="text-yellow-400" />
              <fa icon="star" class="text-yellow-400" />
              <fa icon="star-half-stroke" class="text-yellow-400" />
              <fa icon="star-half-stroke" class="text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </a>
    <button
      @click="addToCart(product)"
      type="button"
      class="whitespace-nowrap text-white bg-primary-color hover:bg-[#018bc8] font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["location", "product"],
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>

<style scoped>
.card {
  text-align: initial;
}
</style>
