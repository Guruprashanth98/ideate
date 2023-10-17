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
  <h1>Index page</h1>
  <!-- Navbar -->
  <!-- Dashboard -->
</template>
