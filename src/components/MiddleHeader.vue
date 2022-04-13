<template>
  <div
    class="bg-white flex flex-col gap-2 items-center md:flex-row md:justify-between md:w-full px-[8%] py-8 md:gap-20"
  >
    <!-- left -->
    <div>
      <router-link to="/">
        <img
          class="md:w-[450px]"
          src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/05/logo.png"
          alt="logo"
        />
      </router-link>
    </div>

    <!-- center -->
    <div>
      <span class="text-xs font-light text-gray-700 md:whitespace-nowrap"
        >Call us toll free:
        <span class="text-secondary-color text-sm font-medium"
          >+1888 234 5678</span
        ></span
      >
    </div>

    <!-- right -->
    <div class="flex w-full border-2 border-cyan-400">
      <!-- left -->
      <div class="flex flex-col grow lg:flex-row lg:items-center">
        <div class="lg:grow">
          <input
            type="text"
            class="block p-2 w-full text-gray-900 bg-gray-50 border-0 border-b-2 lg:border-b-0 lg:border-r-2 border-cyan-400 sm:text-md"
          />
        </div>

        <div class="lg:mt-0 lg:grow">
          <input
            type="text"
            class="block p-2 w-full text-gray-900 bg-gray-50 border-0 sm:text-md"
          />
        </div>
      </div>

      <!-- right -->
      <div class="bg-cyan-400 grid place-items-center px-2">
        <div>
          <fa icon="search" class="text-white text-2xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
