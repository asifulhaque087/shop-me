<template>
  <div class="bg-gray-100">
    <!-- End of Navbar -->
    <!-- <div class="container mx-auto px[8%]"> -->
    <div class="flex flex-col md:flex-row px-[8%] gap-10 pt-10 pb-20">
      <!-- Left Side -->
      <div class="w-full max-w-[260px] overflow-hidden shrink-0">
        <!-- Profile Card -->
        <div class="bg-white p-3 border-t-4 border-cyan-400">
          <div class="image overflow-hidden">
            <img
              class="h-auto w-full mx-auto"
              src="https://i0.wp.com/cms.ironk12.org/wp-content/uploads/2020/02/no-person-profile-pic.png?ssl=1"
              alt=""
            />
          </div>
          <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
            Jane Doe
          </h1>
          <!-- <h3 class="text-gray-600 font-lg text-semibold leading-6">
              Owner at Her Company Inc.
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p> -->
          <ul
            class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
          >
            <li class="flex items-center py-3">
              <span>Status</span>
              <span class="ml-auto"
                ><span class="bg-cyan-500 py-1 px-2 rounded text-white text-sm"
                  >Active</span
                ></span
              >
            </li>
            <li class="flex items-center py-3">
              <span>Member since</span>
              <span class="ml-auto">Nov 07, 2016</span>
            </li>
          </ul>
        </div>
        <!-- End of profile card -->
        <div class="my-4"></div>
      </div>
      <!-- Right Side -->
      <div class="grow shrink overflow-hidden">
        <h1 class="text-2xl font-bold text-[#333] mb-4 mt-10">About</h1>
        <!-- About Section -->
        <div class="bg-white p-3 shadow-sm rounded-sm">
          <div
            class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
          ></div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">First Name</div>
                <div class="px-4 py-2">Jane</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Last Name</div>
                <div class="px-4 py-2">Doe</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2">Female</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Contact No.</div>
                <div class="px-4 py-2">+11 998001001</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Current Address</div>
                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email.</div>
                <div class="px-4 py-2">
                  <a class="text-blue-800" href="mailto:jane@example.com"
                    >jane@example.com</a
                  >
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Birthday</div>
                <div class="px-4 py-2">Feb 06, 1998</div>
              </div>
            </div>
          </div>
          <!-- <button
            class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
          >
            Show Full Information
          </button> -->
        </div>
        <!-- End of about section -->

        <!-- start order list -->
        <h1 class="text-2xl font-bold text-[#333] mb-4 mt-10">Order Lists</h1>
        <div
          className="mx-auto container bg-white dark:bg-gray-800 shadow-none sm:shadow rounded "
        >
          <div className="w-full  xl:overflow-x-hidden">
            <table
              className="min-w-full bg-white dark:bg-gray-800 block sm:table"
            >
              <thead className="hidden sm:table-header-group">
                <tr
                  className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 align-middle text-center"
                >
                  <th
                    className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
                  >
                    Id
                  </th>
                  <th
                    className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
                  >
                    Date
                  </th>
                  <th
                    className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
                  >
                    Paid
                  </th>
                  <th
                    className="text-gray-600 dark:text-gray-400  pr-6  text-sm tracking-normal leading-4 font-medium"
                  >
                    Delivered
                  </th>
                  <td
                    className="text-gray-600 dark:text-gray-400  pr-8  text-sm tracking-normal leading-4 font-medium"
                  >
                    Action
                  </td>
                </tr>
              </thead>
              <tbody className="block sm:table-row-group">
                <tr
                  className="h-auto sm:h-24 border-gray-300 dark:border-gray-200 
                        border  sm:border-0 sm:border-b  align-middle text-center block sm:table-row my-10 sm:my-0"
                >
                  <td
                    className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
                    data-label="Id"
                  >
                    1
                  </td>

                  <td
                    className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell
                        text-right sm:text-center relative    py-10 sm:py-0 border-b sm:border-b-0"
                    data-label="Date"
                  >
                    28/9/50
                  </td>
                  <td
                    className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
                    data-label="Delivered"
                  >
                    paid
                  </td>
                  <td
                    className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
                    data-label="Paid"
                  >
                    not delivered
                  </td>
                  <td
                    className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 block sm:table-cell
                        text-right sm:text-center relative py-10 sm:py-0 border-b sm:border-b-0"
                    data-label="Action"
                  >
                    <button className="mr-2">
                      <fa icon="trash" class="text-xl text-red-500" />
                    </button>
                    <router-link to="">
                      <button className="ml-2">
                        <fa icon="eye" class="text-xl text-yellow-500" />
                      </button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end order list -->
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<!-- component -->
<style>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
</style>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 639px) {
  table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    padding-left: 15px;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-align: left;
  }
}
/* src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" */
</style>
