<template>
  <div class="overflow-x-scroll lg:w-full px-6 lg:px-8">
    <h1 class="text-2xl lg:text-4xl text-gray-700">Hello Mihlali!</h1>

    <!--    Shops and Services Section-->
    <div class="flex flex-col lg:flex-row lg:w-full">
      <div class="my-4 grid grid-cols-2 gap-4 lg:gap-8 lg:w-1/2">
        <div
          v-for="service in shopsAndServices"
          :key="service.name"
          class="flex flex-col bg-white overflow-hidden shadow rounded-lg mx-1 hover:scale-110 transform transition ease-in-out duration-500 cursor-pointer"
        >
          <div class="p-3">
            <div class="flex justify-center items-center text-primary-default">
              <component
                :is="service.icon"
                size="50"
                color="text-primary-default"
                class="lg:hidden"
              ></component
              >
              <component
                :is="service.icon"
                size="100"
                color="text-primary-default"
                class="hidden lg:block"
              ></component>
            </div>
          </div>
          <div
            class="flex-grow bg-primary-light text-primary-default px-1 py-1 lg:px-6 lg:py-3"
          >
            <div class="flex items-center justify-center text-sm lg:text-2xl">
              <span class="flex-grow text-center"> {{ service.name }} </span>
            </div>
          </div>
        </div>
      </div>

      <!--     Recent Orders Section-->
      <section aria-labelledby="recent-hires-title" class="lg:w-1/2 lg:px-10">
        <div class="rounded-lg bg-white overflow-hidden shadow my-4 lg:w-full">
          <div class="p-6">
            <h2
              class="text-base lg:text-2xl font-medium text-gray-900"
              id="recent-hires-title"
            >
              Recent Orders
            </h2>
            <div class="flow-root mt-6">
              <ul class="-my-5 divide-y divide-gray-200">
                <li
                  v-for="order in pastOrders"
                  :key="order.vendor"
                  class="py-4"
                >
                  <div class="flex items-center space-x-4">
                    <div
                      class="flex-shrink-0 bg-tertiary-light p-1 rounded-full text-tertiary-default"
                    >
                      <ShoppingBagIcon class="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm lg:text-lg font-medium text-gray-900 truncate">
                        Purchase from {{ order.vendor }}
                      </p>
                      <p class="text-sm lg:text-lg text-gray-500 truncate">
                        {{ order.date }}
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm lg:text-lg leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm lg:text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ShoppingBagIcon, ScaleIcon } from "@heroicons/vue/solid";
import IconFurniture from "../components/icons/IconFurniture.vue";
import IconArt from "../components/icons/IconArt.vue";
import IconCarWash from "../components/icons/IconCarWash.vue";
import IconCobbler from "../components/icons/IconCobbler.vue";
import IconCourier from "../components/icons/IconCourier.vue";

const pastOrders = [
  { vendor: "Ukhuni", date: "Thu, 15 Apr 2021" },
  { vendor: "Cobbler", date: "Wed, 14 Apr 2021" },
  { vendor: "Car Wash", date: "Sun, 04 Apr 2021" },
  { vendor: "Aramex", date: "Sat, 20 Mar 2021" },
];
const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];
const shopsAndServices = [
  { name: "Car Wash", icon: IconCarWash },
  { name: "Cobbler", icon: IconCobbler },
  { name: "Spier Art", icon: IconArt },
  { name: "Courier", icon: IconCourier },
  { name: "Home Office Funiture & Accessories", icon: IconFurniture },
];

export default {
  components: {
    ShoppingBagIcon,
    IconFurniture,
  },
  setup() {
    return {
      pastOrders,
      cards,
      shopsAndServices,
    };
  },
};
</script>

<style scoped></style>