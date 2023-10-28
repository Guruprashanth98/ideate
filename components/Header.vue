<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue'
</script>
<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-lg"
  >
    <div
      class="flex h-14 w-full items-center justify-between px-5 sm:container sm:px-10"
    >
      <div class="mr-4 flex">
        <a
          href="/"
          class="mr-6 flex items-center space-x-2"
        >
          <span
            class="m-0 text-lg font-bold text-foreground"
            >Ideate</span
          >
        </a>
      </div>
      <div
        class="flex items-center justify-end space-x-4"
      >
        <DashboardViewSwitcher />
        <div class="spacex-1 flex items-center">
          <a
            href="https://github.com/Guruprashanth98/notes-app"
            target="_blank"
          >
            <GithubLogoIcon
              class="mr-2 h-5 w-5"
            />
          </a>
        </div>
        <ColorModeButton></ColorModeButton>
      </div>
    </div>
  </header>
</template>
