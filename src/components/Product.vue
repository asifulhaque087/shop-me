<script>
export default {
  props: ["location"],
};
</script>
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
            class="hidden group-hover:block whitespace-nowrap absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white bg-stone-400 hover:bg-stone-500 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Quick View
          </button>
        </div>
        <div class="py-2">
          <span class="capitalize text-gray-500 text-xs py-3">
            Metus nulla facilisi, Original 24 fl oz
          </span>
          <div class="py-2 flex justify-between">
            <!-- left -->
            <div>
              <span class="font-bold text-green-500 text-xl"> $10 </span>
              <span class="text-gray-300 font-medium">
                <span class="line-through">$3</span>
                <!-- <span class="text-gray-400 text-xs"> 8% </span> -->
              </span>
            </div>
            <!-- right -->
            <div class="flex items-center">
              <!-- 1st -->
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="10"
                  height="10"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <desc>Created with Fabric.js 1.7.22</desc>
                  <defs></defs>
                  <g transform="translate(128 128) scale(0.72 0.72)" style="">
                    <g
                      style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                    >
                      <path
                        d="M 89.95 34.92 c -0.135 -0.411 -0.519 -0.688 -0.95 -0.688 H 56.508 L 45.948 2.814 C 45.811 2.408 45.43 2.133 45 2.133 s -0.811 0.274 -0.948 0.681 l -10.56 31.417 H 1 c -0.432 0 -0.815 0.277 -0.95 0.688 s 0.009 0.861 0.357 1.117 l 26.246 19.314 l -10 31.21 c -0.131 0.409 0.014 0.856 0.36 1.11 c 0.348 0.257 0.817 0.261 1.168 0.012 L 45 68.795 l 26.818 18.889 c 0.173 0.122 0.375 0.183 0.576 0.183 c 0.208 0 0.416 -0.064 0.592 -0.194 c 0.347 -0.254 0.491 -0.701 0.36 -1.11 l -10 -31.21 l 26.246 -19.314 C 89.94 35.781 90.085 35.331 89.95 34.92 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 212, 0);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </span>

              <!-- 2nd -->
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="10"
                  height="10"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <desc>Created with Fabric.js 1.7.22</desc>
                  <defs></defs>
                  <g transform="translate(128 128) scale(0.72 0.72)" style="">
                    <g
                      style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                    >
                      <path
                        d="M 89.95 34.92 c -0.135 -0.411 -0.519 -0.688 -0.95 -0.688 H 56.508 L 45.948 2.814 C 45.811 2.408 45.43 2.133 45 2.133 s -0.811 0.274 -0.948 0.681 l -10.56 31.417 H 1 c -0.432 0 -0.815 0.277 -0.95 0.688 s 0.009 0.861 0.357 1.117 l 26.246 19.314 l -10 31.21 c -0.131 0.409 0.014 0.856 0.36 1.11 c 0.348 0.257 0.817 0.261 1.168 0.012 L 45 68.795 l 26.818 18.889 c 0.173 0.122 0.375 0.183 0.576 0.183 c 0.208 0 0.416 -0.064 0.592 -0.194 c 0.347 -0.254 0.491 -0.701 0.36 -1.11 l -10 -31.21 l 26.246 -19.314 C 89.94 35.781 90.085 35.331 89.95 34.92 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 212, 0);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </span>

              <!-- 3rd -->
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="10"
                  height="10"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <desc>Created with Fabric.js 1.7.22</desc>
                  <defs></defs>
                  <g transform="translate(128 128) scale(0.72 0.72)" style="">
                    <g
                      style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                    >
                      <path
                        d="M 89.95 34.92 c -0.135 -0.411 -0.519 -0.688 -0.95 -0.688 H 56.508 L 45.948 2.814 C 45.811 2.408 45.43 2.133 45 2.133 s -0.811 0.274 -0.948 0.681 l -10.56 31.417 H 1 c -0.432 0 -0.815 0.277 -0.95 0.688 s 0.009 0.861 0.357 1.117 l 26.246 19.314 l -10 31.21 c -0.131 0.409 0.014 0.856 0.36 1.11 c 0.348 0.257 0.817 0.261 1.168 0.012 L 45 68.795 l 26.818 18.889 c 0.173 0.122 0.375 0.183 0.576 0.183 c 0.208 0 0.416 -0.064 0.592 -0.194 c 0.347 -0.254 0.491 -0.701 0.36 -1.11 l -10 -31.21 l 26.246 -19.314 C 89.94 35.781 90.085 35.331 89.95 34.92 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 212, 0);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </span>

              <!-- 4th -->
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="10"
                  height="10"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <desc>Created with Fabric.js 1.7.22</desc>
                  <defs></defs>
                  <g transform="translate(128 128) scale(0.72 0.72)" style="">
                    <g
                      style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                    >
                      <path
                        d="M 89.95 34.92 c -0.135 -0.411 -0.519 -0.688 -0.95 -0.688 H 56.508 L 45.948 2.814 C 45.811 2.408 45.43 2.133 45 2.133 s -0.811 0.274 -0.948 0.681 l -10.56 31.417 H 1 c -0.432 0 -0.815 0.277 -0.95 0.688 s 0.009 0.861 0.357 1.117 l 26.246 19.314 l -10 31.21 c -0.131 0.409 0.014 0.856 0.36 1.11 c 0.348 0.257 0.817 0.261 1.168 0.012 L 45 68.795 l 26.818 18.889 c 0.173 0.122 0.375 0.183 0.576 0.183 c 0.208 0 0.416 -0.064 0.592 -0.194 c 0.347 -0.254 0.491 -0.701 0.36 -1.11 l -10 -31.21 l 26.246 -19.314 C 89.94 35.781 90.085 35.331 89.95 34.92 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 212, 0);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </span>

              <!-- 5th -->
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="10"
                  height="10"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <desc>Created with Fabric.js 1.7.22</desc>
                  <defs></defs>
                  <g transform="translate(128 128) scale(0.72 0.72)" style="">
                    <g
                      style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                    >
                      <path
                        d="M 89.95 34.92 c -0.135 -0.411 -0.519 -0.688 -0.95 -0.688 H 56.508 L 45.948 2.814 C 45.811 2.408 45.43 2.133 45 2.133 s -0.811 0.274 -0.948 0.681 l -10.56 31.417 H 1 c -0.432 0 -0.815 0.277 -0.95 0.688 s 0.009 0.861 0.357 1.117 l 26.246 19.314 l -10 31.21 c -0.131 0.409 0.014 0.856 0.36 1.11 c 0.348 0.257 0.817 0.261 1.168 0.012 L 45 68.795 l 26.818 18.889 c 0.173 0.122 0.375 0.183 0.576 0.183 c 0.208 0 0.416 -0.064 0.592 -0.194 c 0.347 -0.254 0.491 -0.701 0.36 -1.11 l -10 -31.21 l 26.246 -19.314 C 89.94 35.781 90.085 35.331 89.95 34.92 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 212, 0);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <button
      type="button"
      class="whitespace-nowrap text-white bg-[#4ac4fa] hover:bg-[#018bc8] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Add to cart
    </button>
  </div>
</template>

<style scoped>
.card {
  text-align: initial;
}
</style>
