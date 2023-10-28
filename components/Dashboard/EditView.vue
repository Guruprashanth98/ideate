<script setup lang="ts"></script>
<template>
  <div
    class="grid min-h-[calc(100vh-200px)] grid-cols-2 pb-0"
  >
    <DashboardEditor />
    <DashboardReader
      class="col-span-1 ml-4 hidden rounded-md border border-input sm:block"
    />
  </div>
</template>
