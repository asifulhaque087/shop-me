<script>
export default {};
</script>
<template>
  <div class="flex flex-col gap-2 items-center">
    <!-- left -->
    <div>
      <img
        src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2015/05/logo.png"
        alt="logo"
      />
    </div>

    <!-- center -->
    <div>
      <span class="text-xs font-light text-gray-700">Call us toll free:  <span class="text-cyan-400 text-sm font-medium">+1888 234 5678</span></span>
    </div>

    <!-- right -->
    <div class="flex w-full">

      <!-- left -->
      <div class="flex flex-col grow">
        <div>
          <input
            type="text"
            id="large-input"
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-sm border-2 border-cyan-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div class="mt-1">
          <input
            type="text"
            id="large-input"
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-sm border-2 border-cyan-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
