<script lang="ts" setup>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
})
console.log(props.block.content)
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
  <div class="">
    <div
      class="prose-code:--code-linear-bg bg-gray-100rounded-2xl prose-headings:font-sans prose-lg prose-blue text-sm dark:prose-invert prose-headings:text-4xl prose-headings:font-bold prose-headings:tracking-tight prose-pre:bg-zinc-300 prose-pre:text-gray-800 prose-ol:list-decimal prose-ul:list-disc sm:m-0 sm:p-5 sm:px-10"
      v-html="$mdRenderer.render(block.content)"
    ></div>
  </div>
</template>
