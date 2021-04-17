<template>
  <app-nav-bar></app-nav-bar>
  <div class="bg-gray-100 h-full lg:h-screen px-6 pt-6 pb-14 lg:px-20 lg:py-20">
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

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
