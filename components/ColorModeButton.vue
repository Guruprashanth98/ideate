<script setup>
import {
  MoonIcon,
  SunIcon,
} from '@radix-icons/vue'
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference =
      colorMode.value === 'dark'
        ? 'light'
        : 'dark'
  },
})
</script>

<template>
  <div
    class="cursor-pointer select-none"
    @click="isDark = !isDark"
  >
    <MoonIcon v-if="isDark" class="h-5 w-5" />
    <SunIcon v-else class="h-5 w-5" />
  </div>
</template>
