<template>
  <div
    class="bg-white flex flex-col w-full border px-[8%] md:flex-row md:justify-between md:px-[8%]"
  >
    <!-- 1st -->
    <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:p-1 md:grow"
    >
      <fa icon="bars" class="text-[#b2b2b2] text-2xl cursor-pointer" />
    </div>
    <!-- 1st er childrens -->
    <div
      class="hidden md:grid place-items-center px-5 py-4 border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 md:grow"
    >
      <router-link to="/">
        <span class="cursor-pointer">Home</span>
      </router-link>
    </div>

    <!-- categories -->
    <div
      class="grid place-items-center px-5 py-4 border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 md:grow"
    >
      <span data-dropdown-toggle="categories" class="cursor-pointer"
        >Categories</span
      >
    </div>

    <!-- dropdown -->
    <div
      id="categories"
      class="hidden z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <cat-sidebar />
    </div>

    <!-- 2nd -->
    <!-- <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:p-1 md:grow"
    >
      <fa icon="list" class="text-[#b2b2b2] text-2xl cursor-pointer" />
    </div> -->

    <div
      class="hidden md:grid place-items-center px-5 py-4 border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 md:grow"
    >
      <router-link to="/profile">
        <span class="cursor-pointer">My Account</span>
      </router-link>
    </div>

    <!-- <div
      class="grid place-items-center px-5 py-4 border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 md:grow"
    >
      <span data-dropdown-toggle="pages" class="cursor-pointer">Pages</span>
    </div> -->
    <!-- dropdown -->
    <!-- <div
      id="pages"
      class="hidden z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <router-link
            to="/"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Home
          </router-link>
        </li>

        <li>
          <router-link
            to="/shopping-cart"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Shopping Cart
          </router-link>
        </li>

        <li>
          <router-link
            to="/profile"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Profile
          </router-link>
        </li>
      </ul>
    </div> -->

    <!-- 4th -->
    <!-- <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:p-1 md:grow"
    >
      <div class="relative">
        <span
          class="absolute mt-3 left-[-6px] text-[#777] z-10 bg-white rounded-lg px-1"
        >
          0
        </span>
        <fa
          icon="arrows-up-down-left-right"
          class="text-secondary-color text-2xl relative cursor-pointer"
        />
      </div>
    </div> -->

    <!-- 3rd -->
    <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:p-1 md:grow"
    >
      <div class="relative">
        <span
          class="absolute mt-3 left-[-6px] text-[#777] z-10 bg-white rounded-lg px-1"
        >
          0
        </span>
        <fa
          icon="heart"
          class="text-secondary-color text-2xl relative cursor-pointer"
        />
      </div>
    </div>

    <!-- 5th -->
    <div
      class="grid border-l border-r md:border-l md:border-r border-gray-200 p-4 md:p-1 md:grow"
    >
      <div
        class="flex items-center gap-3 cursor-pointer"
        data-dropdown-toggle="shopping-cart-dropdown"
      >
        <!-- left -->
        <div class="relative">
          <span
            class="absolute mt-3 right-[-6px] text-[#777] z-10 bg-white rounded-lg px-1"
          >
            {{ $store.state.cart.cartProducts.length }}
          </span>
          <fa
            icon="shopping-cart"
            class="text-secondary-color text-3xl relative cursor-pointer"
          />
        </div>
        <!-- right -->
        <div class="flex flex-col">
          <span class="text-xs text-[#b2b2b2] font-bold">
            <!-- My Cart -->
            <span> My Cart </span>
            <span>
              <fa icon="caret-down" data-dropdown-toggle="dropdown" />
            </span>
          </span>
          <span class="text-[#333] text-lg font-bold">€14.99</span>
        </div>
      </div>
    </div>
    <!-- cart dropdown -->

    <div
      id="shopping-cart-dropdown"
      class="hidden z-10 w-64 bg-white rounded shadow"
    >
      <!-- items -->

      <div
        v-for="(product, i) in $store.state.cart.cartProducts"
        :key="i"
        class="flex items-center p-3 border-b"
      >
        <!-- left -->
        <div class="w-1/2">
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/04/1-350x350.jpg"
            alt=""
          />
        </div>
        <!-- right -->
        <div class="">
          <p class="text-[#333] text-sm leading-normal">
            Metus nulla facilisi, Original 24 fl oz
          </p>
          <span class="flex gap-2 font-bold text-secondary-color text-lg">
            <span class="text-gray-300 font-medium line-through">€9.99</span>
            <span>€5.99</span>
          </span>
          <div class="flex items-center">
            <fa icon="star" class="text-yellow-400 text-sm" />
            <fa icon="star" class="text-yellow-400 text-sm" />
            <fa icon="star-half-stroke" class="text-yellow-400 text-sm" />
            <fa icon="star-half-stroke" class="text-yellow-400 text-sm" />
          </div>
        </div>
      </div>

      <!-- buttons -->
      <div
        class="flex gap-3 items-center justify-between flex-wrap bg-white p-4 border-l border-r border-b"
      >
        <router-link to="shopping-cart">
          <button
            type="button"
            class="whitespace-nowrap text-primary-color bg-[#f8f8f8] hover:bg-[#018bc8] hover:text-[#f8f8f8] font-medium rounded text-sm px-5 py-2.5"
          >
            View Cart
          </button>
        </router-link>

        <button
          type="button"
          class="whitespace-nowrap text-[#f8f8f8] bg-primary-color hover:bg-[#f8f8f8] hover:text-primary-color font-medium rounded text-sm px-5 py-2.5"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import CatSidebar from "./CatSidebar.vue";

export default {
  components: {
    CatSidebar,
  },
  // computed: {
  //   ...mapState(["counter"]),
  // },
  // computed: {
  //   counter: function () {
  //     return this.$store.state.cart.counter;
  //   },
  // },
};
</script>
