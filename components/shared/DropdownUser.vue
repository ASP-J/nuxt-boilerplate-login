<template>
  <li
    class="flex flex-col px-4 py-2 text-primary-content rounded-lg border-accent border-2 shadow"
  >
    <div
      class="flex items-center justify-between gap-2 cursor-pointer"
      @click="toggleDropdown"
    >
      <div class="flex items-center gap-2">
        <Icon name="ri:apps-fill" class="text-primary" />
        <span class="font-medium text-sm">Usuários</span>
      </div>
      <Icon
        :name="'ri:arrow-down-s-line'"
        :class="{ 'rotate-180': isDropdownOpen }"
        class="text-gray-400 transition-transform duration-300"
      />
    </div>
    <transition name="dropdown">
      <ul v-if="isDropdownOpen" class="mt-2 space-y-2 w-full">
        <li
          class="flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-lg"
        >
          <Icon name="clarity:administrator-solid" class="text-primary" />
          Administradores
        </li>
        <li
          class="flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-lg"
        >
          <Icon name="clarity:administrator-solid" class="text-primary" />
          Clientes
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
