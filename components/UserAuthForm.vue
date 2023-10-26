<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue'

import { ref } from 'vue'
import { cn } from '@/lib/utils'

const isLoading = ref(false)

async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  await setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <div
    :class="cn('grid gap-6', $attrs.class ?? '')"
  >
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <UiLabel class="sr-only" for="email">
            Email
          </UiLabel>
          <UiInput
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <UiButton :disabled="isLoading">
          <Icon
            v-if="isLoading"
            name="svg-spinners:180-ring-with-bg"
            class="mr-2 h-4 w-4 animate-spin"
          />
          Sign In with Email
        </UiButton>
      </div>
    </form>
    <div class="relative">
      <div
        class="absolute inset-0 flex items-center"
      >
        <span class="w-full border-t"></span>
      </div>
      <div
        class="relative flex justify-center text-xs uppercase"
      >
        <span
          class="bg-background px-2 text-muted-foreground"
        >
          Or continue with
        </span>
      </div>
    </div>
    <UiButton
      variant="outline"
      type="UiButton"
      :disabled="isLoading"
    >
      <Icon
        v-if="isLoading"
        name="svg-spinners:180-ring-with-bg"
        class="mr-2 h-4 w-4 animate-spin"
      />
      <GithubLogoIcon
        v-else
        class="mr-2 h-4 w-4"
      />
      GitHub io
    </UiButton>
  </div>
</template>
