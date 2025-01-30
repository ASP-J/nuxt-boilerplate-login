import { useAuth } from "@/store/auth/authStore.js";
import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth();
  if (auth.isAuthenticated) {
    await auth.ensureUser();
  } else {
    await auth.removeUser();
  }
});
