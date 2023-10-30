<script setup lang="ts">
definePageMeta({
  middleware: ['hanko-logged-in'],
})
const { setNotes } = useNotes()
const { setNote } = useSelectedNote()
const { user } = useUser()

// Login through hanko cookie
// flow to populate supapabse user id
// middleware to fetch user from supabase and populate user state

try {
  const data = await $fetch('/api/note', {
    params: {
      user_id: user.value.id,
    },
  })
  if (data) {
    setNotes(toRaw(data))
    setNote(toRaw(data[0]))
  }
} catch (err) {
  /* eslint-disable no-console */
  console.log(err)
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <Dashboard />
  </NuxtLayout>
</template>
