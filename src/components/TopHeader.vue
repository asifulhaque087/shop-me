<template>
  <div
    class="text-[#333] bg-gray-50 flex flex-col items-center gap-1 text-sm border-b py-2 md:flex-row md:justify-between px-[8%]"
  >
    <!-- login -->
    <div data-modal-toggle="small-modal" class="cursor-pointer">Login</div>
    <!-- dropdown -->
    <!-- <button
      type="button"
      class="focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-2"
    >
      <fa icon="caret-down" data-dropdown-toggle="dropdown" />
      <span class="text-[13px]"> USD </span>
      <fa icon="caret-down" data-dropdown-toggle="dropdown2" />
    </button> -->
    <!-- Dropdown menu 1 -->
    <!-- <div
      id="dropdown"
      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Settings</a
          >
        </li>
      </ul>
    </div> -->

    <!-- Dropdown menu 2 -->
    <!-- <div
      id="dropdown2"
      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >hola</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >hi</a
          >
        </li>
      </ul>
    </div> -->
  </div>
  <!-- modal -->
  <!-- Small Modal -->
  <div
    id="small-modal"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Login
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="small-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <form class="text-[#777]" @submit.prevent="handleSubmit">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium dark:text-gray-300"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium"
                >Your password</label
              >
              <input
                type="password"
                id="password"
                v-model="form.password"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <!-- <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 bg-gray-50 rounded border"
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="font-medium">Remember me</label>
              </div>
            </div> -->
            <button
              type="submit"
              class="whitespace-nowrap text-primary-color bg-[#f8f8f8] hover:bg-[#018bc8] hover:text-[#f8f8f8] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
        </div>
        <!-- Modal footer -->
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      show: true,
      form: {
        email: "userone@gmail.com",
        password: "password",
      },
    };
  },

  methods: {
    handleSubmit: function () {
      console.log("form submit");
      axios.post('auth/login')
    },
    // hideModal: function () {
    //   this.show = false;
    //   let backdrop = document.querySelector("[modal-backdrop]");
    //   backdrop.remove();
    // },
  },
};
</script>

<style></style>
