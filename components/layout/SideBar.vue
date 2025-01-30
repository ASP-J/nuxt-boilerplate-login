<template>
  <aside
    :class="[
      'bg-base-200 dark:bg-base-200 flex flex-col transition-all duration-300 ease-in-out',
      isHidden ? 'w-12' : 'w-1/5',
      { 'hidden md:flex': isMobileHidden },
    ]"
  >
    <div class="pt-5 flex items-center justify-between mx-4">
      <img
        v-if="!isHidden"
        :src="currentTheme === 'darkTheme' ? logoWhite : logoBlack"
        alt="logo"
        class="w-40 pr-2"
      />
      <button class="text-primary-content" @click="$emit('toggleSidebar')">
        <Icon name="mdi:menu" />
      </button>
    </div>

    <nav
      v-if="!isHidden"
      class="mt-6 flex flex-col items-center gap-4 flex-grow"
    >
      <ul class="space-y-2 w-full px-4">
        <li
          class="flex px-4 py-2 justify-between items-center text-primary-content rounded-lg border-accent border-2 shadow cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <Icon name="ri:apps-fill" class="text-primary" />
            <span class="font-medium text-sm">Dashboard</span>
          </div>
        </li>
        <hr class="border-accent" />
        <DropdownUser />
        <DropdownLinks />
      </ul>
    </nav>
  </aside>
</template>

<script>
import { useLayout } from "@/store/layout";
import logoWhite from "@/assets/images/logo-branco.png";
import logoBlack from "@/assets/images/logo-preto.png";
import DropdownUser from "~/components/shared/DropdownUser.vue";
import DropdownLinks from "~/components/shared/DropdownLinks.vue";

export default {
  components: {
    DropdownLinks,
    DropdownUser,
  },
  props: {
    isHidden: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logoWhite,
      logoBlack,
      isMobileHidden: true,
    };
  },
  computed: {
    currentTheme() {
      const layoutStore = useLayout();
      return layoutStore.getTheme;
    },
  },
  methods: {
    toggleSidebar() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>
