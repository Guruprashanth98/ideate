import { Note, User } from '~/types/collections'

export const useSaveNote = async (
  user: User,
  selectedNote: Note,
): Promise<{ insertedNote: Note | null; insertError: Error }> => {
  const { id } = user
  let insertedNote: Note | null = null
  let insertError = null
  try {
    const data = await $fetch('/api/createNote', {
      method: 'POST',
      body: {
        note: {
          ...selectedNote,
          user_id: id,
        },
        user_id: id,
      },
    })

    insertedNote = toRaw(data?.data) as Note
  } catch (error: any) {
    insertError = error.value
  }
  return { insertedNote, insertError }
}
