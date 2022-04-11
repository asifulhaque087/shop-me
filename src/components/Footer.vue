<template>
  <div class="bg-white pt-1 pb-4">
    <!-- header -->
    <!-- <header class="grid grid-cols-1 md:grid-cols-3 bg-[#efefef] px-[8%]">
      <div class="flex gap-4 items-center py-7">
        <span>
          <svg
            style="
              fill: #018bc8;
              stroke: #018bc8;
              display: inline-block;
              vertical-align: middle;
            "
            width="30px"
            height="30px"
            version="1.1"
            viewBox="0 0 100 100"
            data-reactid=".2a895ovdqxs.4.0.0.0.0.0"
          >
            <path
              d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"
              data-reactid=".2a895ovdqxs.4.0.0.0.0.0.0"
            ></path>
          </svg>
        </span>
        <p class="font-bold text-[#018bc8]">Fast & Free Delivery</p>
      </div>

      <div class="flex gap-4 items-center py-7">
        <span>
          <svg
            style="
              fill: #018bc8;
              stroke: #018bc8;
              display: inline-block;
              vertical-align: middle;
            "
            width="30px"
            height="30px"
            version="1.1"
            viewBox="0 0 100 100"
            data-reactid=".2a895ovdqxs.4.0.0.0.0.0"
          >
            <path
              d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"
              data-reactid=".2a895ovdqxs.4.0.0.0.0.0.0"
            ></path>
          </svg>
        </span>
        <p class="font-bold text-[#018bc8]">Fast & Free Delivery</p>
      </div>

      <div class="flex gap-4 items-center py-7">
        <span>
          <svg
            style="
              fill: #018bc8;
              stroke: #018bc8;
              display: inline-block;
              vertical-align: middle;
            "
            width="30px"
            height="30px"
            version="1.1"
            viewBox="0 0 100 100"
            data-reactid=".2a895ovdqxs.4.0.0.0.0.0"
          >
            <path
              d="m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z"
              data-reactid=".2a895ovdqxs.4.0.0.0.0.0.0"
            ></path>
          </svg>
        </span>
        <p class="font-bold text-[#018bc8]">Fast & Free Delivery</p>
      </div>
    </header> -->

    <main class="grid grid-cols-1 gap-10 md:grid-cols-4 px-[8%] my-10">
      <div>
        <h1 class="text-md text-[#333]">About Us</h1>
        <p class="text-sm text-[#777] mt-4">
          Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing
          aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euis- mod in
          auctor ut, ligula. Aliquam dapibus tincidunt metus.
        </p>
      </div>

      <!-- contact us -->
      <div class="">
        <h1 class="text-md text-[#333]">Contact Us</h1>

        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2 mt-4">
            <span>
              <fa icon="map-location" class="text-[#4ac4fa]" />
            </span>
            <p class="text-sm text-[#777]">
              8901 Marmora Road, Glasgow, D04 89GR.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span>
              <fa icon="phone" class="text-[#4ac4fa]" />
            </span>
            <p class="text-sm text-[#777]">800-559-65-80</p>
          </div>

          <div class="flex items-center gap-2">
            <span>
              <fa icon="envelope" class="text-[#4ac4fa]" />
            </span>
            <p class="text-sm text-[#777]">info@companyname.com</p>
          </div>
        </div>
      </div>
      <!-- social links -->
      <div>
        <h1 class="text-md text-[#333]">Social Links</h1>
        <div class="text-sm text-[#777] mt-4 flex flex-wrap gap-1">
          <fa
            :icon="['fab', 'facebook-square']"
            class="text-4xl text-blue-500"
          />
          <fa
            :icon="['fab', 'twitter-square']"
            class="text-4xl text-cyan-500"
          />

          <fa
            :icon="['fab', 'google-plus-square']"
            class="text-4xl text-red-400"
          />
          <fa
            :icon="['fab', 'pinterest-square']"
            class="text-4xl text-red-700"
          />

          <fa :icon="['fab', 'flickr']" class="text-4xl text-pink-500" />
          <fa :icon="['fab', 'youtube-square']" class="text-4xl text-red-500" />

          <fa :icon="['fab', 'vimeo-square']" class="text-4xl text-cyan-600" />
          <fa
            :icon="['fab', 'instagram-square']"
            class="text-4xl text-red-500"
          />

          <fa :icon="['fab', 'linkedin']" class="text-4xl text-blue-700" />
        </div>
      </div>
      <!-- newsletter -->
      <div>
        <h1 class="text-md text-[#333]">Sign Up to Our Newsletter</h1>
        <p class="text-sm text-[#777] mt-4">
          Sign up our newsletter and get exclusive deals you will not find
          anywhere else straight to your inbox!
        </p>
        <div class="flex mt-5">
          <input
            type="text"
            id="website-admin"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Bonnie Green"
          />
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-cyan-500 rounded-r-md"
          >
            <fa icon="envelope" class="text-white text-lg" />
          </span>
        </div>
        <!-- input will be here -->
      </div>
    </main>
    <!--  -->
    <div class="w-full max-w-xs mx-auto mt-16">
      <!-- payment methods icon -->
      <div class="flex justify-center items-center gap-1 flex-wrap">
        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_1.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_2.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_3.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_4.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_5.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_6.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://velikorodnov.com/wordpress/shopmewp/classic/wp-content/uploads/2017/11/payment_img_7.png"
            alt=""
          />
        </div>
      </div>
      <p class="text-[#777] text-sm text-center mt-4">
        © 2021 ShopMe Pharmacy All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
