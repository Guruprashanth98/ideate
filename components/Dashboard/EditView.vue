<script setup lang="ts"></script>
<template>
  <div class="grid grid-cols-2 min-h-[calc(100vh-200px)]">
    <DashboardEditor />
    <DashboardReader
      class="hidden sm:block col-span-1 rounded-md border border-input ml-4"
    />
  </div>
</template>
