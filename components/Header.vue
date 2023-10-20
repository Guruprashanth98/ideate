<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue'
</script>
<template>
  <div>
    <header
      class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div class="flex justify-between h-14 items-center w-full px-10">
        <div class="mr-4 hidden md:flex">
          <a href="/" class="mr-6 flex items-center space-x-2">
            <span class="m-0 font-bold text-lg text-foreground">Ideate</span>
          </a>
          <nav class="flex items-center space-x-6 text-sm font-medium">
            <a
              href=""
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              >Documentation</a
            >
            <a
              href=""
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              >Components</a
            >
            <a
              href=""
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              >Themes</a
            ><a
              href=""
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              >Examples</a
            >
            <a
              href=""
              target="_target"
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              >GitHub</a
            >
          </nav>
        </div>
        <div class="flex items-center justify-end space-x-4">
          <button
            class="items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 w-72 h-8 px-3 hidden lg:flex lg:justify-between lg:items-center w-72 h-8 px-3 hidden lg:flex lg:justify-between lg:items-center"
          ></button>
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
