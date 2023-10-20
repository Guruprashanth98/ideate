<script setup lang="ts">
definePageMeta({
  middleware: ['hanko-logged-in'],
})
const hanko = useHanko()
if (hanko) {
  // hanko.user.getCurrent()
}
// function logout() {
//   hanko!.user.logout()
// }
</script>

<template>
  <!-- Navbar -->
  <!-- Dashboard -->
  <DashboardView />
</template>
