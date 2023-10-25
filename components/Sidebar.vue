<script setup lang="ts">
import { PenSquare } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Note, User } from '@/types/collections'

const { notes: notesRef, addNote } = useNotes()
const { user } = useUser()
const { note: selectedNote, setNote } = useSelectedNote()
const { setView } = useView()

async function addNewNote() {
  const newNote = {
    title: 'Untitled',
    content: '',
  }
  const { insertedNote, insertError } = await useSaveNote(
    user.value as User,
    newNote as Note,
  )
  if (insertedNote) {
    insertedNote.title = newNote.title
    insertedNote.content = newNote.content
    addNote(insertedNote as Note)
    setNote(insertedNote as Note)
    setView('editor')
  }
  /* eslint-disable no-console */
  if (insertError) console.log(insertError)
}
</script>

<template>
  <div
    :class="
      cn(
        'pb-12 min-w-[240px] max-w-[350px]  hidden lg:block',
        $attrs.class ?? '',
      )
    "
  >
    <div class="space-y-4 py-4 min-h-full">
      <div class="pr-4 py-2 w-full">
        <div class="py-2 w-full">
          <div
            class="mb-2 py-3 pl-2 ml-2 flex justify-between items-center w-[90%] border-b"
          >
            <h1 class="text-xl font-semibold tracking-tight cursor-default">
              Notes
            </h1>
            <PenSquare class="w-5 h-5 cursor-pointer" @click="addNewNote()" />
          </div>
          <UiScrollArea class="w-full">
            <div class="space-y-1 py-2 max-w-[15rem] overflow-hidden">
              <UiButton
                v-for="(note, i) in notesRef"
                :key="`${note}-${i}`"
                :variant="
                  selectedNote && note.id === selectedNote?.id
                    ? 'secondary'
                    : 'ghost'
                "
                :class="`w-[13rem] note-${note.id}`"
                @click="setNote(note)"
              >
                <span class="truncate w-full text-left font-normal">{{
                  note.title
                }}</span>
              </UiButton>
            </div>
          </UiScrollArea>
        </div>
      </div>
    </div>
  </div>
</template>
