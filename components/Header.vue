<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue'
</script>
<template>
  <div>
    <header
      class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div
        class="container flex justify-between h-14 items-center w-full px-10"
      >
        <div class="mr-4 hidden md:flex">
          <a href="/" class="mr-6 flex items-center space-x-2">
            <span class="m-0 font-bold text-lg text-foreground">Ideate</span>
          </a>
        </div>
        <div class="flex items-center justify-end space-x-4">
          <DashboardViewSwitcher />
          <div class="flex items-center spacex-1">
            <a
              href="https://github.com/Guruprashanth98/notes-app"
              target="_blank"
            >
              <GithubLogoIcon class="mr-2 h-5 w-5" />
            </a>
          </div>
          <ColorModeButton></ColorModeButton>
        </div>
      </div>
    </header>
  </div>
</template>
