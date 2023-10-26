<script setup lang="ts">
const { view } = useView()
</script>
<template>
  <div class="relative">
    <DashboardReadView
      v-if="view === 'reader'"
    ></DashboardReadView>
    <DashboardEditView
      v-else-if="view === 'editor'"
    ></DashboardEditView>
  </div>
</template>
