import { Note } from '@/types/collections'

interface newNote {
  title: ''
  content: ''
}

export const useSelectedNote = () => {
  // State to manage current selected note

  const initNote: newNote = {
    title: '',
    content: '',
  }

  const note = useState<Note>('note', () => initNote as Note)
  const setNote = (payload: Note) => {
    note.value = payload
  }

  return { note, setNote }
}
