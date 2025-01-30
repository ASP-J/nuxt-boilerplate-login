import { defineStore } from "pinia";

export const useLayout = defineStore("layout", {
  state: () => {
    return {
      theme: localStorage.getItem("nuxt-color-mode") || "lightTheme",
    };
  },

  getters: {
    getTheme() {
      return this.theme;
    },
  },

  actions: {
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem("nuxt-color-mode", theme);
    },
  },
});
