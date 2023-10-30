<script setup lang="ts">
import {
  FileX,
  MoreVertical,
} from 'lucide-vue-next'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
const open = ref(false)
const { note, setNote, resetNote } =
  useSelectedNote()
const { notes, deleteNote: deleteFromState } =
  useNotes()
const pending = ref(false)
const deleteNote = async () => {
  pending.value = true
  const { data, error } = await useFetch(
    '/api/deleteNote',
    {
      method: 'POST',
      body: { note_id: note.value.id },
    },
  )
  /* eslint-disable no-console */
  if (error) console.log(error.value)
  if (data) {
    if (notes.value.length === 1) {
      deleteFromState(note.value)
      resetNote()
    } else {
      deleteFromState(note.value)
      setNote(notes.value[0])
    }
    open.value = false
    pending.value = false
  }
}
</script>

<template>
  <AlertDialog :open="open">
    <DropdownMenu>
      <DropdownMenuTrigger
        ><MoreVertical class="text-sm opacity-50"
      /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <AlertDialogTrigger as-child>
          <DropdownMenuItem @click="open = true">
            <FileX class="mr-2 w-4 h-4" />
            Delete
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle
          >Delete Note</AlertDialogTitle
        >
        <AlertDialogDescription>
          Are you sure you want to delete "{{
            note.title
          }}"
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel class="bg-muted"
          >Cancel</AlertDialogCancel
        >
        <UiButton
          :disabled="pending"
          @click="deleteNote"
          >{{
            pending ? 'Deleting...' : 'Deleting'
          }}</UiButton
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
