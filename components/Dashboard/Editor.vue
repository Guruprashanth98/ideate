<script setup lang="ts">
const { user } = useUser()
const { updateNote: updateStoreNotes } =
  useNotes()
const { note, setNote } = useSelectedNote()
const editorRef = ref()
let textArea: HTMLTextAreaElement | null = null

onMounted(() => {
  textArea = editorRef.value.textAreaRef
})

function addNewLine(element: any) {
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

function addCode() {
  const split = note.value.content?.split('\n')
  if (!split) return
  const lastLine = split[split.length - 1]
  if (lastLine !== '') addNewLine(textArea)
  note.value.content =
    note.value.content +
    '```\n Type your code here\n ```\n'
}
function addLink(type: 'link' | 'image') {
  const addon =
    type === 'link'
      ? '[Link Text](https://)'
      : '![Image Text](https://)'
  addNewLine(textArea)
  note.value.content = note.value.content + addon
}
function onResize({
  height,
}: {
  height: number
}) {
  if (textArea)
    textArea.style.paddingTop = `${height + 60}px`
}
const saveNote = async () => {
  updateStoreNotes(note.value, note.value.id)
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
  addNewLine(element)
}
const changeFocus = (e: any) => {
  if (textArea) {
    e.preventDefault()
    textArea.setSelectionRange(0, 0)
    textArea.focus()
  }
}
</script>
<template>
  <div
    class="relative col-span-2 flex h-[90vh] resize-y flex-col rounded-md border sm:col-span-1"
  >
    <DashboardTitle
      :editable="true"
      :on-resize="onResize"
      class="absolute left-0 top-0 !mt-0 w-[calc(100%-25px)] bg-transparent !pt-5 backdrop-blur-sm first-line:border-b"
      @keydown.enter="changeFocus"
    ></DashboardTitle>
    <div class="h-full px-0 sm:pl-4">
      <UiTextarea
        ref="editorRef"
        :value="note.content"
        class="h-full cursor-auto resize-none border-none focus-visible:ring-transparent focus-visible:ring-offset-0 pb-10 leading-6 text-base"
        placeholder="Notes...(Markdown is enabled)"
        spellcheck="false"
        @input="
          (event: Event) => updateNote(event)
        "
        @change="saveNote"
        @keydown.tab="tabPress"
        @keydown.enter="enterPress"
      >
      </UiTextarea>
    </div>
    <div
      class="absolute top-1 right-2 w-auto h-auto opacity-100 hover:opacity-100"
    >
      <DashboardEditorOptions
        :add-code="addCode"
        :add-link="addLink"
      />
    </div>
  </div>
</template>
