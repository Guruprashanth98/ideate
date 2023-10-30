<script lang="ts" setup>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
})
/* eslint-disable no-console */
/* eslint-disable vue/no-v-html */

onBeforeMount(() => {
  if (
    !['content'].every(
      (propName) => propName in props.block,
    )
  ) {
    console.error(
      `RichText.vue has failed the block property validation`,
    )
  }
})
onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <ClientOnly
    ><div
      class="overflow-y-scroll hover:prose-a:underline prose-a:text-blue-800 prose-code:text-sm prose-code:--code-linear-bg prose-lg prose-blue h-full !pt-24 text-sm dark:prose-invert prose-headings:font-sans prose-code:font-inter prose-headings:text-4xl prose-headings:font-bold prose-headings:tracking-tight prose-pre:bg-zinc-300 prose-pre:text-gray-800 prose-ol:list-decimal prose-ul:list-disc sm:m-0 sm:p-5 px-3 sm:px-5 prose-p:text-[16px] prose-li:text-base prose-li:leading-4 prose-p:leading-6"
      v-html="$mdRenderer.render(block.content)"
    ></div
  ></ClientOnly>
</template>
