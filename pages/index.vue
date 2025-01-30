<script setup lang="ts">
import ThemeSelector from "~/components/shared/ThemeSelector.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-gray-100 w-full"
  >
    <p>Hello word</p>
    <UButton @click="handleLogin">Login</UButton>
  </div>
</template>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
