<script>
export default {};
</script>

<template>
  <div
    class="bg-white flex flex-col w-full border px-[8%] md:flex-row md:justify-between md:px-[8%]"
  >
    <!-- 1st -->
    <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:grow"
    >
      <fa icon="bars" class="text-[#b2b2b2] text-2xl" />
    </div>
    <!-- 1st er childrens -->
    <div
      class="hidden md:grid place-items-center px-5 py-4 border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 md:grow"
    >
      <span>Home</span>
    </div>

    <div
      class="hidden md:grid place-items-center px-5 py-4 border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 md:grow"
    >
      <span>My Account</span>
    </div>

    <!-- 2nd -->
    <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:grow"
    >
      <fa icon="list" class="text-[#b2b2b2] text-2xl" />
    </div>

    <!-- 3rd -->
    <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:grow"
    >
      <div class="relative">
        <span
          class="absolute mt-3 left-[-6px] text-[#777] z-10 bg-white rounded-lg px-1"
        >
          0
        </span>
        <fa icon="heart" class="text-[#4ac4fa] text-2xl relative" />
      </div>
    </div>

    <!-- 4th -->
    <div
      class="grid place-items-center border-b border-l border-r md:border-b-0 md:border-l md:border-r-0 border-gray-200 p-4 md:grow"
    >
      <div class="relative">
        <span
          class="absolute mt-3 left-[-6px] text-[#777] z-10 bg-white rounded-lg px-1"
        >
          0
        </span>
        <fa icon="heart" class="text-[#4ac4fa] text-2xl relative" />
      </div>
    </div>

    <!-- 5th -->
    <div
      class="grid border-l border-r md:border-l md:border-r border-gray-200 p-4 md:grow"
    >
      <div class="flex items-center gap-3">
        <!-- left -->
        <div class="relative">
          <span
            class="absolute mt-3 right-[-6px] text-[#777] z-10 bg-white rounded-lg px-1"
          >
            0
          </span>
          <fa icon="shopping-cart" class="text-[#4ac4fa] text-3xl relative" />
        </div>
        <!-- right -->
        <div class="flex flex-col">
          <span class="text-xs text-[#b2b2b2] font-bold">My Cart</span>
          <span class="text-[#333] text-lg font-bold">$14.99</span>
        </div>
      </div>
    </div>
  </div>
</template>
