import { defineStore } from "pinia";
import { login } from "~/services/auth/authService.js";
import { getMe } from "~/services/auth/userService.js";

export const useAuth = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("auth:user") || "{}") || null,
    token: localStorage.getItem("auth:access_token") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isUserLoaded: (state) => !!state.user?.id,
    userPermissions: (state) => state.user?.permissions || [],
    userRoles: (state) => state.user?.roles || [],
    isAdmin: (state) => state.user?.group === "admin",
  },
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("auth:access_token", token);
    },
    removeToken() {
      this.token = null;
      localStorage.removeItem("auth:access_token");
    },
    async login(data) {
      const response = await login(data);
      this.setToken(response?.data?.access_token);
      return response;
    },
    logout() {
      this.removeUser();
      this.removeToken();
    },
    setUser(user) {
      this.user = user;
      localStorage.setItem("auth:user", JSON.stringify(user));
    },
    removeUser() {
      this.user = null;
      localStorage.removeItem("auth:user");
    },
    async fetchUser() {
      const response = await getMe();
      this.setUser(response);
      return response;
    },
    async ensureUser() {
      if (!this.isUserLoaded) {
        return await this.fetchUser();
      }
    },
  },
});
