<template>
  <div class="layout-container">
    <main
      class="flex flex-col items-center justify-center flex-1 w-full p-4 bg-base-200"
    >
      <slot />
    </main>
    <footer class="w-full p-4 bg-base-200 shadow-md">
      <p class="text-center text-gray-600">
        &copy; {{ currentYear }} João Miguel
      </p>
    </footer>
    <ThemeSelector class="fixed right-0 bottom-0 pr-4 pb-4" />
  </div>
</template>

<script>
import ThemeSelector from "~/components/shared/ThemeSelector.vue";
import Header from "~/components/layout/Header.vue";

export default {
  components: { Header, ThemeSelector },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
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
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
'
