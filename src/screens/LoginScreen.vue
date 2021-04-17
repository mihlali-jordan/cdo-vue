<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-primary-default">
      Concierge Desk Online
    </h2>
    <app-login></app-login>
  </div>
</template>

<script>
import AppLogin from "../components/icons/AppLogin.vue";
import logo from "../assets/logo.svg";
export default {
  components: {
    AppLogin
  },
  name: "LoginScreen",
  data() {
    return {
      logo,
    };
  },
};
</script>
