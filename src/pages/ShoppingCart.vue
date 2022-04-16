<template>
  <div class="px-[8%] mt-10">
    <h1 class="text-2xl font-bold text-[#333] mb-3">Shopping Cart</h1>
    <table
      className="tables min-w-full bg-white dark:bg-gray-800 block sm:table border-0 md:border"
    >
      <thead className="hidden sm:table-header-group text-[#777] bg-[#f8f8f8]">
        <tr
          className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 align-middle text-center"
        >
          <th
            className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
          >
            Product Image
          </th>

          <th
            className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
          >
            Product Name
          </th>
          <th
            className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
          >
            SKU
          </th>
          <td
            className="text-gray-600 dark:text-gray-400  pr-8  text-sm tracking-normal leading-4 font-medium"
          >
            Price
          </td>

          <td
            className="text-gray-600 dark:text-gray-400  pr-8  text-sm tracking-normal leading-4 font-medium"
          >
            Quantity
          </td>

          <td
            className="text-gray-600 dark:text-gray-400  pr-8  text-sm tracking-normal leading-4 font-medium"
          >
            Total
          </td>

          <td
            className="text-gray-600 dark:text-gray-400  pr-8  text-sm tracking-normal leading-4 font-medium"
          >
            Action
          </td>
        </tr>
      </thead>
      <tbody className="block sm:table-row-group">
        <tr
          v-for="(product, i) in $store.state.cart.cartProducts"
          :key="i"
          className="h-auto sm:h-24 border-gray-300 dark:border-gray-200 border  sm:border-0 sm:border-b  align-middle text-center block sm:table-row sm:my-0"
        >
          <!-- product image -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="Product Image"
          >
            <img
              src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/04/2-100x100.jpg"
              alt="category"
              className="w-16  overflow-hidden shadow block ml-auto md:m-auto"
            />
          </td>

          <!-- product name -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="product Name"
          >
            product 1
          </td>

          <!-- sku -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="SKU"
          >
            hola
          </td>

          <!-- price -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="Price"
          >
            2039
          </td>

          <!-- quantity -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="Quantity"
          >
            <div class="md:flex items-center justify-center">
              <button
                @click="decrement(product.id)"
                type="button"
                class="border-l border-r border-t border-b px-3 py-2 text-center text-[#333] bg-transparent"
              >
                <fa icon="minus" class="font-medium" />
              </button>

              <button
                type="button"
                class="border-r border-t border-b cursor-text px-3 py-2 text-center text-[#777] bg-transparent"
              >
                {{ product.quantity }}
              </button>

              <button
                @click="increment(product.id)"
                type="button"
                class="border-r border-t border-b px-3 py-2 text-center text-[#333] bg-transparent"
              >
                <fa icon="plus" class="font-medium" />
              </button>
            </div>
          </td>

          <!-- total -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="Total"
          >
            €2039
          </td>

          <!-- action -->
          <td
            className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
            data-label="Action"
          >
            <div class="md:flex items-center gap-2 justify-center">
              <button
                @click="remove(product.id)"
                type="button"
                class="px-3 py-2 text-center text-white bg-[#777] rounded hover:bg-[#333]"
              >
                <fa icon="xmark" class="font-medium" />
              </button>

              <!-- <button
                type="button"
                class="px-3 py-2 text-center text-white bg-[#777] rounded hover:bg-[#333]"
              >
                <fa icon="xmark" class="font-medium" />
              </button> -->
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- items -->
    <div
      v-if="$store.state.cart.cartProducts.length <= 0"
      class="bg-white p-4 border-l border-r border-b"
    >
      <p class="text-[#777] py-5 text-center">No products found</p>
    </div>
    <div
      class="flex gap-3 items-center justify-between flex-wrap bg-white p-4 border-l border-r border-b"
    >
      <router-link to="/">
        <button
          type="button"
          class="whitespace-nowrap text-[#f8f8f8] bg-primary-color hover:bg-[#f8f8f8] hover:text-primary-color font-medium rounded text-sm px-5 py-2.5"
        >
          Continue Shopping
        </button>
      </router-link>

      <button
        v-if="$store.state.cart.cartProducts.length > 0"
        @click="clear()"
        type="button"
        class="whitespace-nowrap text-primary-color bg-[#f8f8f8] hover:bg-[#018bc8] hover:text-[#f8f8f8] font-medium rounded text-sm px-5 py-2.5"
      >
        Clear Shopping Cart
      </button>
    </div>

    <!-- second part -->
    <div class="grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
      <div>
        <h1 class="text-2xl font-bold text-[#333] mb-3">Discount Codes</h1>
        <div class="bg-white border rounded p-4">
          <label
            for="coupon"
            class="block mb-2 text-sm text-[#777] dark:text-gray-300"
            >Enter your coupon code if you have one.</label
          >
          <input
            type="text"
            id="coupon"
            class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Coupon Code"
          />
        </div>

        <div
          class="flex items-center justify-between bg-white p-4 border-l border-r border-b"
        >
          <button
            type="button"
            class="whitespace-nowrap text-[#f8f8f8] bg-primary-color hover:bg-[#f8f8f8] hover:text-primary-color font-medium rounded text-sm px-5 py-2.5"
          >
            Apply Coupon
          </button>
        </div>
      </div>
      <!-- Cart Totals -->
      <div>
        <div class="relative overflow-x-auto">
          <h1 class="text-2xl font-bold text-[#333] mb-3">Cart Totals</h1>
          <table
            class="w-full text-left text-base font-extrabold border bg-white"
          >
            <thead class="text-[#777]">
              <tr class="border-b">
                <th scope="col" class="px-6 py-3 border-r">Subtotal</th>
                <th scope="col" class="px-6 py-3">€14.99</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-50 border-b text-secondary-color">
                <th scope="row" class="px-6 py-4 whitespace-nowrap border-r">
                  Total
                </th>
                <td class="px-6 py-4">€{{ Math.floor(getCartTotal) }}</td>
              </tr>
            </tbody>
          </table>

          <div
            class="flex items-center justify-between bg-white p-4 border-l border-r border-b"
          >
            <button
              type="button"
              class="whitespace-nowrap text-[#f8f8f8] bg-primary-color hover:bg-[#f8f8f8] hover:text-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- interested in -->
    <div class="mt-10 mb-14">
      <h1 class="text-2xl font-bold text-[#333] mb-3">
        You May Be Interested in…
      </h1>
      <div class="bg-white rounded border">
        <div class="w-full max-w-xs">
          <product class="border-r" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Product from "../components/Product.vue";
export default {
  components: { Product },
  methods: {
    ...mapMutations(["increment", "decrement", "remove", "clear"]),
  },
  // computed: {
  //   ...mapGetters(["cart/getCartTotal"]),
  // },
  computed: {
    // getCartTotal() {
    //   return this.$store.getters["cart/getCartTotal"];
    // },
    getCartTotal() {
      return this.$store.state.cart.cartProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    },
  },
};
</script>

<style scoped>
@media (max-width: 639px) {
  .tables td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    padding-left: 15px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    font-weight: bold;
    text-align: left;
  }
}
</style>
