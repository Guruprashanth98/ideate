import { Note } from '@/types/collections'

export const useNotes = () => {
  // State to manage current selected note

  const notes: Ref<Note[]> = useState<Note[]>('notes', () => [])

  const addNote = (payload: Note) => {
    notes.value = [...notes.value, payload]
  }

  const deleteNote = (payload: Note) => {
    notes.value = notes.value.filter((note: Note) => note.id !== payload.id)
  }

  const setNotes = (payload: Note[]) => {
    notes.value = payload
  }

  const updateNote = (payload: Note) => {
    notes.value = notes.value.map((note) => {
      if (note.id === payload.id) {
        // If the note ID matches the updated note ID, return the updated note
        return { ...note, ...payload }
      }
      return note // Otherwise, return the original note
    })
  }

  return { notes, setNotes, addNote, deleteNote, updateNote }
}
