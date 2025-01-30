<template>
  <header class="flex items-center justify-between py-2 px-4">
    <Icon name="flowbite:arrow-left-outline" class="text-primary-content" />
    <h1 class="text-2xl font-semibold text-primary-content">Header</h1>

    <div class="flex items-center space-x-4">
      <LogoutButton />
      <ThemeSelector />
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSelector from "~/components/shared/ThemeSelector.vue";
import LogoutButton from "~/components/shared/LogoutButton.vue";
</script>

<style scoped></style>
