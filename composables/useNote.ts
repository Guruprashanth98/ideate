export const useNote = () => {
  // State to manage current selected note

  interface Note {
    id?: number | null
    content?: string | null
  }
  const initNote: Note = {
    id: null,
    content: null,
  }
  const note = ref(initNote)

  function setNote(payload: Note) {
    note.value = payload
  }
  return { note, setNote }
}
