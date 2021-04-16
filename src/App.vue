<template>
  <app-nav-bar></app-nav-bar>
  <div class="bg-gray-100 h-full px-6 py-4">
    <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
    </router-view>
  </div>
</template>

<script>
import AppNavBar from "./components/shared/AppNavBar.vue";

export default {
  components: {
    AppNavBar,
  },
};
</script>