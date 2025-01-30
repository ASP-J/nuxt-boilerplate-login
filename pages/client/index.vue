<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getMe } from "~/services/auth/userService";

const userData = ref(null);

onMounted(async () => {
  try {
    userData.value = await getMe();
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1>Client</h1>
    <pre>{{ userData }}</pre>
  </div>
</template>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
