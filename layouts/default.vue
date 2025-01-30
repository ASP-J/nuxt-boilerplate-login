<template>
  <div
    class="flex h-screen overflow-hidden bg-base-200 dark:bg-base-200 w-full"
  >
    <SideBar
      v-if="!isTabletOrMobile"
      :is-hidden="isSidebarHidden"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      :class="[
        'flex flex-col bg-base-100 dark:bg-base-100 rounded-lg ml-1 my-1 mr-1 border-2 border-accent-content transition-all duration-300 ease-in-out',
        isSidebarHidden || isTabletOrMobile ? 'w-screen' : 'w-4/5',
      ]"
    >
      <Header />
      <main class="flex-1 overflow-auto p-6 bg-gray-50">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "~/components/layout/SideBar.vue";
import Header from "~/components/layout/Header.vue";
import { useAuth } from "@/store/auth/authStore.js";

const auth = useAuth();

export default {
  components: { SideBar, Header },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      dropdownOpen: false,
      isSidebarHidden: false,
      isTabletOrMobile: false,
    };
  },
  mounted() {
    this.checkIfTabletOrMobile();
    window.addEventListener("resize", this.checkIfTabletOrMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIfTabletOrMobile);
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    logout() {
      auth.logout();
      navigateTo("/auth/login");
      console.log("Logout clicked");
    },
    toggleSidebar() {
      this.isSidebarHidden = !this.isSidebarHidden;
    },
    checkIfTabletOrMobile() {
      this.isTabletOrMobile = window.innerWidth <= 1024;
    },
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  overflow: auto;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
