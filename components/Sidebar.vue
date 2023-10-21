<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Note {
  id: number
  content: string
}
const notes = [
  {
    id: 1,
    content: 'Find max range',
  },
  {
    id: 2,
    content: 'rotate array',
  },
  {
    id: 3,
    content: 'Uber system design',
  },
  {
    id: 4,
    content: 'Websockets architecture',
  },
] as Note[]
function findNote(id: Number): Note {
  return notes.filter((note) => note.id === id)[0]
}
const { note: selectedNote, setNote } = useNote()

const cachedNote = localStorage.getItem('selectedNote')

function setSelectedNote(note: Note) {
  setNote(note)
  localStorage.setItem('selectedNote', note.id.toString())
}
if (cachedNote) {
  setSelectedNote(findNote(parseInt(cachedNote)))
} else {
  setSelectedNote(notes[0])
}
</script>

<template>
  <div :class="cn('pb-12 max-w-xs', $attrs.class ?? '')">
    <div class="space-y-4 py-4 min-h-full hidden lg:block">
      <div class="px-3 py-2 w-full">
        <div class="py-2 w-full">
          <h1
            class="mb-2 ml-7 pr-7 py-3 text-xl font-semibold tracking-tight w-[80%] border-b"
          >
            Notes
          </h1>
          <UiScrollArea class="px-1 w-full">
            <div class="space-y-1 p-2 max-w-[15rem] overflow-hidden">
              <UiButton
                v-for="(note, i) in notes"
                :key="`${note}-${i}`"
                :variant="
                  selectedNote && note.id === selectedNote?.id
                    ? 'secondary'
                    : 'ghost'
                "
                class="px-4 w-[14rem]"
                @click="setSelectedNote(note)"
              >
                <span class="truncate w-full text-left font-normal">{{
                  note.content
                }}</span>
              </UiButton>
            </div>
          </UiScrollArea>
        </div>
      </div>
    </div>
  </div>
</template>
