<script setup lang="ts">
import { cn } from '@/lib/utils'
const { user } = useUser()
const { note } = useSelectedNote()
const title = ref()
const { focused } = useFocus(title)

const props = defineProps<{
  editable?: boolean
}>()
const autoResize = () => {
  title.value.style.height = '35px'
  const scrollHeight = title.value.scrollHeight
  title.value.style.height = `${scrollHeight}px`
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
})
onUpdated(() => {
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
  if (error) console.log(error)
}
</script>
<template>
  <textarea
    v-if="note.title != null"
    ref="title"
    v-model="note.title"
    :class="
      cn(
        'auto-resize h-[35px] bg-background overflow-hidden scroll-m-20 mb-4 mt-2 focus:ring-0 focus:ring-offset-0 text-2xl leading-normal font-semibold tracking-tight border-none focus-visible:ring-transparent focus-visible:ring-offset-0 px-0 sm:px-4 focus-visible:outline-none w-full resize-none',
        $attrs.editable ?? '',
      )
    "
    :readonly="!props.editable"
    @change="saveNote"
  ></textarea>
</template>
