<template>
  <app-nav-bar></app-nav-bar>
  <router-view v-slot="slotProps">
    <component :is="slotProps"></component>
  </router-view>
</template>

<script>
import AppNavBar from "./components/shared/AppNavBar.vue";

export default {
  components: {
    AppNavBar
  }
}

</script>