import { useAuth } from "@/store/auth/authStore.js";
import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return;
  }

  const adminPrefix = "/admin/";
  const clientPrefix = "/client/";

  const isAdmin = auth.isAdmin;

  if (!isAdmin && to.path.includes(adminPrefix)) {
    alert("Sem permissão");
    return navigateTo("/client");
  }

  if (isAdmin && to.path.includes(clientPrefix)) {
    alert("Sem permissão");
    return navigateTo("/admin");
  }
});
