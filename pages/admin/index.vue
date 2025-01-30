<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "@/store/auth/authStore.js";

const userData = ref(null);
const auth = useAuth();

function logout() {
  auth.logout();
  navigateTo("/auth/login");
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1>Admin</h1>
    <pre>{{ userData }}</pre>
    <button class="btn btn-primary text-black" @click="logout">Logout</button>
  </div>
</template>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
