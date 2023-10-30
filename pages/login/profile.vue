<script setup lang="ts">
definePageMeta({
  middleware: ['hanko-logged-in'],
})
const continueToApp = () => {
  navigateTo('/')
}
</script>

<template>
  <div>
    <hanko-profile></hanko-profile>
    <UiButton @click="continueToApp"
      >Continue to App</UiButton
    >
  </div>
</template>
