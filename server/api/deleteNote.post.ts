import { H3Event } from 'h3'

export default defineEventHandler(
  async (event: H3Event) => {
    const { note_id: noteId } =
      await readBody(event)

    const { error } = await supabase
      .from('note')
      .delete()
      .eq('id', noteId!)

    if (error) {
      /* eslint-disable no-console */
      console.log(error)
      handleError(500, event, error)
      return
    }
    return {
      status: 200,
      message: 'Deleted Successfully',
    }
  },
)
