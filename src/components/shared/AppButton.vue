<template>
  <button
    v-if="!link"
    type="submit"
    :class="{ [buttonClass]: styling }"
    class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :to="route"
    :class="{ [buttonClass]: styling }"
    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-default hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <slot></slot>
  </router-link>
</template>

<script>
import { ROUTES } from "../../constants/routeConstants.js";

export default {
  data() {
    return {
      ROUTES,
      selectedBtnClass: "",
    };
  },
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    route: {
      type: String,
      required: false,
      default: ROUTES.HOME.route,
    },
    styling: {
      type: String,
      required: true,
      default: "primary",
    },
  },
  computed: {
    buttonClass() {
      if (this.styling === "primary") {
        return "bg-primary-light text-primary-default hover:bg-primary-default hover:text-white focus:ring-primary-default";
      } else if (this.styling === "secondary") {
        return "bg-secondary-light text-secondary-default hover:bg-secondary-default hover:text-white focus:ring-secondary-default";
      } else {
        return "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-0";
      }
    },
  },
};
</script>

<style scoped></style>
