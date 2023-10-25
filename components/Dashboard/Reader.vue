<script setup lang="ts">
const { view } = useView()
const { note } = useSelectedNote()
</script>
<template>
  <div
    :class="{
      'bg-muted': view === 'editor',
      border: true,
      'border-transparent': true,
    }"
  >
    <DashboardTitle :editable="false" class="bg-transparent"></DashboardTitle>
    <DashboardRichText :block="note" />
  </div>
</template>
