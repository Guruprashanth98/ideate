<script setup>
import { MoonIcon, SunIcon } from '@radix-icons/vue'
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <div class="cursor-pointer" @click="isDark = !isDark">
    <MoonIcon v-if="isDark" class="w-5 h-5" />
    <SunIcon v-else class="w-5 h-5" />
  </div>
</template>
