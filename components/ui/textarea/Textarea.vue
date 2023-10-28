<script setup lang="ts">
import { defineExpose } from 'vue'
import { cn } from '@/lib/utils'
const textAreaRef = ref()
defineExpose({
  textAreaRef,
})
/* eslint-disable @typescript-eslint/no-unused-vars */
const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
}>()
const emits = defineEmits<{
  (
    e: 'update:modelValue',
    payload: string | number,
  ): void
}>()
</script>

<template>
  <textarea
    ref="textAreaRef"
    :class="
      cn(
        'flex min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        $attrs.class ?? '',
      )
    "
  ></textarea>
</template>
