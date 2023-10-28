<script setup lang="ts">
const { view } = useView()
const { note } = useSelectedNote()
</script>
<template>
  <div
    :class="{
      'relative h-[90vh] bg-muted dark:bg-slate-900 overflow-y-scroll':
        view === 'editor',
      border: true,
      'border  border-transparent rounded-md': true,
    }"
  >
    <div
      :editable="false"
      :class="{
        'absolute left-0 top-0 z-10 mb-4 h-[74px] w-[calc(100%-5px)]  py-2 pt-4 text-4xl font-bold leading-normal tracking-tighter backdrop-blur-sm first-line:border-b px-3 sm:px-5 sm:pl-0 sm:ml-5': true,
        'glass-texture': view === 'editor',
      }"
    >
      {{ note.title }}
    </div>
    <DashboardRichText
      v-if="note.content?.length !== 0"
      :block="note"
    />
  </div>
</template>
