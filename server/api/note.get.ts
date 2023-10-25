import { H3Event } from 'h3'
import { Note } from '~/types/collections'
export default defineEventHandler(
  async (event: H3Event): Promise<Array<Note> | undefined> => {
    const { user_id: userId } = getQuery(event)
    if (!userId) {
      handleError(400, event)
      return
    }
    const { data: notes, error } = await supabase
      .from('decrypted_note')
      .select('*')
      .match({ user_id: userId })

    if (error) {
      /* eslint-disable no-console */
      console.log(error)
      handleError(500, event, error)
      return
    }
    if (notes) {
      const _notes: Note[] = notes.map((note) => {
        // Create a new reponse without 'decryptedTitle' and 'decryptedContent'

        const {
          decrypted_title: decryptedTitle,
          decrypted_content: decryptedContent,
          ...newObj
        } = note
        newObj.title = decryptedTitle
        newObj.content = decryptedContent
        return newObj
      }) as Note[]
      const notesData = {
        notes: _notes,
      }
      return notesData.notes
    }
  },
)
