<script setup lang="ts">
const { view } = useView()
</script>
<template>
  <div
    v-auto-animate
    :class="{
      relative: true,
      // 'right-[5px]': view === 'editor',
    }"
  >
    <DashboardReadView
      v-if="view === 'reader'"
    ></DashboardReadView>
    <DashboardEditView
      v-else-if="view === 'editor'"
      class="pr-[5px]"
    ></DashboardEditView>
  </div>
</template>
