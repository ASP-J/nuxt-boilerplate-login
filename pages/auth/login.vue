<template>
  <div class="flex items-center justify-center min-h-screen bg-base-200 pb-16">
    <div
      class="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-lg shadow-md border-2 border-accent-content"
    >
      <p class="text-5xl font-semibold mb-8 text-neutral">Login</p>
      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <div class="relative">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              @click="togglePasswordVisibility"
            >
              <Icon
                :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'"
                class="text-neutral mt-1"
              />
            </span>
          </div>
        </div>
        <div class="pt-2">
          <button
            type="submit"
            class="w-full px-4 py-2 font-semibold text-black bg-primary rounded-md focus:outline-none focus:ring focus:ring-primary border-primary border-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "~/store/auth/authStore";
import { definePageMeta } from "#imports";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const auth = useAuth();

definePageMeta({
  layout: "auth",
});

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

async function handleLogin() {
  await auth
    .login({
      email: email.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      const group = res?.data?.group;

      if (group === "admin") {
        navigateTo("/admin");
      } else if (group === "client") {
        navigateTo("/client");
      } else {
        alert("Unknown group: {group}");
      }
    })
    .catch((err) => {
      alert(err);
      //baixar uma lib para mostrar o erro para o usuário
    });
}
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
