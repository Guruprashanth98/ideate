<script setup lang="ts">
import emptyStateDark from '../../assets/empty-dark.svg'
import emptyStateLight from '../../assets/empty.svg'
const { view } = useView()
const { note } = useSelectedNote()
const colorMode = useColorMode()
</script>
<template>
  <div
    :class="{
      'relative h-[90vh] bg-muted dark:bg-muted':
        view === 'editor',
      border: true,
      'border  border-transparent rounded-md': true,
    }"
  >
    <div
      :editable="false"
      :class="{
        'absolute left-0 top-0 z-10 mb-4 h-[74px] w-[calc(100%-25px)]  py-2 pt-4 text-4xl font-bold leading-normal tracking-tighter backdrop-blur-sm first-line:border-b px-3 sm:px-5 sm:pl-0 sm:ml-5': true,
        'glass-texture': view === 'editor',
      }"
    >
      {{ note.title }}
    </div>
    <DashboardRichText
      v-if="note.content?.length !== 0"
      :block="note"
    />
    <div
      v-else
      class="h-[calc(100vh-100px)] min-w-full relative"
    >
      <div
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <img
          v-if="colorMode.value === 'light'"
          :src="emptyStateLight"
          class="text-white fill-white w-[200px] opacity-1"
        />
        <img
          v-else
          :src="emptyStateDark"
          class="text-white fill-white w-[200px] opacity-30"
        />
        <h3
          class="text-center pl-10 text-muted-foreground opacity-50 mt-5 font-semibold"
        >
          No Content to display...
        </h3>
      </div>
    </div>
  </div>
</template>
