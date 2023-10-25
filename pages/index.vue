<script setup lang="ts">
definePageMeta({
  middleware: ['hanko-logged-in'],
})
const { setNotes } = useNotes()
const { setNote } = useSelectedNote()
const { user: supabaseUser, setUser } = useUser()

// Login through hanko cookie
// flow to populate supapabse user id
// middleware to fetch user from supabase and populate user state

const hanko = useHanko()
const user = await hanko?.user.getCurrent()
if (user?.email) {
  const {
    pending,
    refresh,
    data: userResponse,
    error: userError,
  } = await useFetch('/api/user', {
    method: 'post',
    body: { email: user?.email },
  })
  if (pending) await refresh()
  if (userResponse.value) {
    const { id, email } = toRaw(userResponse.value.user)
    setUser({ id, email })
  }
  /* eslint-disable no-console */
  if (userError.value) console.log(userError.value)
}

try {
  const data = await $fetch('/api/note', {
    transform: (_note: any) => {
      return _note.notes
    },
    params: {
      user_id: supabaseUser.value.id,
    },
  })
  setNotes(toRaw(data))
  setNote(toRaw(data[0]))
} catch (error: any) {
  /* eslint-disable no-console */
  console.log(error.value)
}
</script>

<template>
  <Dashboard />
</template>
