<script setup lang="ts">
import autoAnimate from '@formkit/auto-animate'
import { PenSquare } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Note, User } from '@/types/collections'

const sidebar = ref()
const tooltip = ref()
const { sidebarExpanded } = useSidebarState()
const {
  notes: notesRef,
  addNote,
  updateNote,
} = useNotes()
const { user } = useUser()
const { note: selectedNote, setNote } =
  useSelectedNote()
const { setView } = useView()

onMounted(() => {
  autoAnimate(sidebar.value)
})
async function addNewNote() {
  const randomId = Math.random()
  const newNote = {
    title: 'Untitled',
    content: '',
    id: randomId,
  }
  addNote(newNote as Note)
  setNote(newNote as Note)
  setView('editor')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ..._note } = newNote
  const { insertedNote, insertError } =
    await useSaveNote(
      user.value as User,
      _note as Note,
    )
  if (insertedNote) {
    insertedNote.title = _note.title
    insertedNote.content = _note.content
    updateNote(insertedNote as Note, randomId)
    setNote(insertedNote as Note)
  }
  /* eslint-disable no-console */
  if (insertError) console.log(insertError)
}
</script>

<template>
  <div
    v-if="sidebarExpanded"
    ref="sidebar"
    :class="
      cn(
        'sticky hidden h-[calc(100vh-57px)] min-w-[240px] max-w-[350px] border-r pb-12 lg:block top-[57px]',
        $attrs.class ?? '',
      )
    "
  >
    <div class="min-h-full space-y-4 py-4">
      <div class="w-full py-2 pr-4">
        <div class="w-full py-2">
          <div
            class="mb-2 ml-2 flex w-[95%] items-center justify-between border-b py-3 pl-2 relative"
          >
            <h1
              class="cursor-default text-xl font-semibold tracking-tight"
            >
              Notes
            </h1>
            <div
              class="flex justify-center items-center"
            >
              <div
                class="flex justify-center items-center relative"
              >
                <PenSquare
                  class="h-5 w-5 cursor-pointer"
                  @click="addNewNote()"
                  @mouseenter="tooltip = true"
                  @mouseleave="tooltip = false"
                />
                <!-- <div
                  v-if="tooltip"
                  class="rounded-md border border-input px-3 py-1 text-sm absolute top-[-180%] right-[-90%] w-[90px] text-center bg-background text-foreground"
                >
                  Add Note
                </div> -->
              </div>
            </div>
          </div>
          <div
            v-if="notesRef.length === 0"
            class="w-full flex flex-wrap pr-10 relative"
          >
            <div class="min-w-full">
              <p
                class="text-center font-semibold opacity-50 mt-8"
              >
                Add Notes...
              </p>
            </div>
          </div>
          <UiScrollArea class="w-full">
            <div
              class="max-w-[15rem] space-y-1 overflow-hidden py-2"
            >
              <UiButton
                v-for="(note, i) in notesRef"
                :key="`${note}-${i}`"
                :variant="
                  selectedNote &&
                  note.id === selectedNote?.id
                    ? 'secondary'
                    : 'ghost'
                "
                :class="`w-full note-${note.id} flex items-center justify-between pr-1`"
                @click="setNote(note)"
              >
                <span
                  class="w-full truncate text-left font-normal"
                  >{{ note.title }}</span
                >
                <SidebarOptions
                  v-if="
                    note.id === selectedNote?.id
                  "
                />
              </UiButton>
            </div>
          </UiScrollArea>
        </div>
      </div>
    </div>
  </div>
</template>
