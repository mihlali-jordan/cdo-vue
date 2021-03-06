<template>
  <Disclosure as="nav" class="bg-primary-default" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-tertiary-default hover:bg-tertiary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-12 w-auto"
              :src="logo"
              alt="Hollard"
            />
            <img
              class="hidden lg:block h-12 w-auto"
              :src="logo"
              alt="Hollard"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.route"
                active-class="bg-secondary-light text-secondary-default"
                class="text-white hover:bg-secondary-light hover:text-secondary-default px-3 py-2 rounded-md text-sm font-medium"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <router-link :to="ROUTES.CART.route" class="mt-1">
            <button
              class="bg-primary-light p-1 rounded-full text-primary-default hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </router-link>
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem
                  v-slot="{ active }"
                  v-for="item in userMenu"
                  :key="item.name"
                >
                  <router-link
                    :to="item.route"
                    active-class="bg-gray"
                    class="block px-4 py-2 text-sm text-gray-700"
                    >{{ item.name }}</router-link
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.route"
          active-class="bg-secondary-light text-secondary-default"
          class="text-white hover:bg-secondary-light hover:text-secondary-default block px-3 py-2 rounded-md text-base font-medium"
        >
          {{ item.name }}
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/outline";

import { ROUTES } from "../../constants/routeConstants.js";
import logo from "../../assets/logo.svg";

const navigation = [
  { name: ROUTES.HOME.name, route: ROUTES.HOME.route },
  { name: ROUTES.SHOP.name, route: ROUTES.SHOP.route },
  { name: ROUTES.OFFERINGS.name, route: ROUTES.OFFERINGS.route },
  { name: ROUTES.SERVICES.name, route: ROUTES.SERVICES.route },
];

const userMenu = [
  { name: ROUTES.ORDERS_USER.name, route: ROUTES.ORDERS_USER.route },
  { name: ROUTES.HELP.name, route: ROUTES.HELP.route },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ShoppingCartIcon,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      ROUTES,
      logo,
    };
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      userMenu,
      open,
    };
  },
};
</script>