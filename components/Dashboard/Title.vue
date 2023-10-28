<script setup lang="ts">
import { vElementSize } from '@vueuse/components'
import { cn } from '@/lib/utils'

const { user } = useUser()
const { updateNote } = useNotes()
const { note, setNote } = useSelectedNote()
const backupTitle = ref({
  title: '',
  id: 0,
})
const title = ref()
const { focused } = useFocus(title)

const props = defineProps<{
  editable?: boolean
  onResize?: (height: number) => void
}>()
const triggerResize = (e: any) => {
  if (props.onResize) props.onResize(e)
}
const autoResize = () => {
  if (title.value) {
    title.value.style.height = '35px'
    const scrollHeight = title.value.scrollHeight
    title.value.style.height = `${scrollHeight}px`
  }
}
onMounted(() => {
  autoResize()
  if (
    note.value.title === 'Untitled' &&
    props.editable &&
    note.value.content === ''
  ) {
    focused.value = true
  }
  backupTitle.value = {
    title: note.value.title as string,
    id: note.value.id,
  }
})
onUpdated(() => {
  if (note.value.id !== backupTitle.value.id) {
    backupTitle.value = {
      title: note.value.title as string,
      id: note.value.id,
    }
  }
  autoResize()
  if (
    note.value.title === 'Untitled' &&
    props.editable &&
    note.value.content === ''
  ) {
    focused.value = true
  }
})
const saveNote = async () => {
  if (note.value.title === '') {
    setNote({
      ...note.value,
      title: backupTitle.value.title,
    })
    return
  }

  backupTitle.value.title = note.value
    .title as string

  updateNote(note.value)

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
  if (error) console.log(error)
}
const updateNoteTitle = (e: any) => {
  setNote({
    ...note.value,
    title: e.target.value,
  })
}
</script>
<template>
  <textarea
    v-if="note.title != null"
    ref="title"
    v-element-size="(e) => triggerResize(e)"
    :value="note.title"
    spellcheck="false"
    :class="
      cn(
        'auto-resize mb-4 mt-5 h-[35px] resize-none scroll-m-20 overflow-hidden border-none  bg-background  text-4xl font-bold leading-normal tracking-tighter focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 sm:px-10',
        $attrs.editable ?? '',
      )
    "
    :readonly="!props.editable"
    @input="updateNoteTitle"
    @change="saveNote"
  ></textarea>
</template>
