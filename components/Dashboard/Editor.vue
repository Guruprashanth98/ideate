<script setup lang="ts">
const { user } = useUser()
const { updateNote: updateStoreNotes } =
  useNotes()
const { note, setNote } = useSelectedNote()
const saveNote = async () => {
  updateStoreNotes(note.value)
  const { id } = user.value
  const body = {
    note: {
      ...note.value,
      user_id: id,
    },
    user_id: id,
  }
  const { error } = await useFetch(
    '/api/updateNote',
    {
      method: 'POST',
      body,
    },
  )
  /* eslint-disable no-console */
  if (error) console.log(error.value)
}
const updateNote = (event: Event) => {
  const _note = {
    ...note.value,
    content: (event.target as HTMLInputElement)
      .value,
  }
  console.log(_note, '_note')
  setNote(_note)
}

const tabPress = (e: any) => {
  e.preventDefault()
  const element = e.target!
  const start = element.selectionStart
  const end = element.selectionEnd
  element.value =
    element.value.substring(0, start) +
    '\t' +
    element.value.substring(end)

  // put caret at right position again
  element.selectionStart = element.selectionEnd =
    start + 1
}
const enterPress = (e: any) => {
  e.preventDefault()
  const element = e.target
  const start = element.selectionStart
  const currentLine = element.value
    .slice(0, start)
    .split('\n')
    .pop()
  const newlineIndent =
    '\n' + currentLine.match(/^\s*/)[0]
  document.execCommand(
    'insertText',
    false,
    newlineIndent,
  )
}
</script>
<template>
  <div
    class="col-span-2 rounded-md border border-transparent sm:col-span-1"
  >
    <DashboardTitle
      :editable="true"
      class="border-b"
    ></DashboardTitle>
    <div class="px-0 sm:px-4">
      <UiTextarea
        :value="note.content"
        class="min-h-[80vh] focus-visible:ring-transparent focus-visible:ring-offset-0 sm:min-h-[200px] md:min-h-[700px] lg:min-h-[200px]"
        placeholder="Notes...(Markdown is enabled)"
        @input="
          (event: Event) => updateNote(event)
        "
        @change="saveNote"
        @keydown.tab="tabPress"
        @keydown.enter="enterPress"
      >
      </UiTextarea>
    </div>
  </div>
</template>
