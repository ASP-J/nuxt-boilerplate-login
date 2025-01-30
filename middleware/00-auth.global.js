import { useAuth } from "@/store/auth/authStore.js";
import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth();

  const unauthenticatedRoutes = ["/auth/login"];

  if (unauthenticatedRoutes.includes(to.path)) {
    if (auth.isAuthenticated) {
      alert("Você já está autenticado");
      return navigateTo("/");
    }
    return;
  }

  if (!auth.isAuthenticated) {
    alert("Você precisa estar autenticado");
    return navigateTo("/auth/login");
  }
});
