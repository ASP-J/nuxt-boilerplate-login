<script setup lang="ts">
import { useAuth } from "~/store/auth/authStore";

const auth = useAuth();

function logout() {
  auth.logout();
  navigateTo("/auth/login");
}
</script>

<template>
  <button class="flex items-center">
    <icon name="prime:sign-out" class="text-primary-content" @click="logout" />
  </button>
</template>

<style scoped></style>
