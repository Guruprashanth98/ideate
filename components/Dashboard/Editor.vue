<script setup lang="ts">
const { user } = useUser()
const { note, setNote } = useSelectedNote()
const saveNote = async () => {
  const { id } = user.value
  const body = {
    note: {
      ...note.value,
      user_id: id,
    },
    user_id: id,
  }
  const { error } = await useFetch('/api/updateNote', {
    method: 'POST',
    body,
  })
  /* eslint-disable no-console */
  if (error) console.log(error.value)
}
const updateNote = (event: Event) => {
  const _note = {
    ...note.value,
    content: (event.target as HTMLInputElement).value,
  }
  console.log(_note, '_note')
  setNote(_note)
}
</script>
<template>
  <div class="col-span-2 sm:col-span-1 rounded-md border border-transparent">
    <DashboardTitle :editable="true" class="border-b"></DashboardTitle>
    <div class="px-0 sm:px-4">
      <UiTextarea
        :value="note.content"
        class="min-h-[80vh] sm:min-h-[200px] md:min-h-[700px] lg:min-h-[200px] focus-visible:ring-transparent focus-visible:ring-offset-0"
        placeholder="Notes...(Markdown is enabled)"
        @input="(event: Event) => updateNote(event)"
        @change="saveNote"
      >
      </UiTextarea>
    </div>
  </div>
</template>
