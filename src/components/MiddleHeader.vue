<script>
export default {};
</script>
<template>
  <div
    class="flex flex-col gap-2 items-center md:flex-row md:justify-between md:w-full px-[8%] py-8 md:gap-20"
  >
    <!-- left -->
    <div>
      <img
        class="md:w-[450px]"
        src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/05/logo.png"
        alt="logo"
      />
    </div>

    <!-- center -->
    <div>
      <span class="text-xs font-light text-gray-700 md:whitespace-nowrap"
        >Call us toll free:
        <span class="text-[#018bc8] text-sm font-medium"
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
            id="large-input"
            class="block p-2 w-full text-gray-900 bg-gray-50 border-0 border-b-2 lg:border-b-0 lg:border-r-2 border-cyan-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div class="lg:mt-0 lg:grow">
          <input
            type="text"
            id="large-input"
            class="block p-2 w-full text-gray-900 bg-gray-50 border-0 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <!-- right -->
      <div class="bg-cyan-400 grid place-items-center px-2">
        <div>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
