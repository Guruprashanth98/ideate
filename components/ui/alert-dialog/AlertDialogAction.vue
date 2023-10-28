<script setup lang="ts">
import { AlertDialogAction } from 'radix-vue'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
</script>

<template>
  <AlertDialogAction
    v-bind="props"
    :class="
      cn(buttonVariants(), $attrs.class ?? '')
    "
  >
    <slot />
  </AlertDialogAction>
</template>
