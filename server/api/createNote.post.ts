import { H3Event } from 'h3'

export default defineEventHandler(
  async (event: H3Event) => {
    const { note: _note, userId } =
      await readBody(event)

    const { data, error } = await supabase
      .from('note')
      .insert([_note])
      .eq('user_id', userId)
      .select()

    if (error) {
      /* eslint-disable no-console */
      console.log(error)
      handleError(500, event, error)
      return
    }
    return {
      data: data[0],
    }
  },
)
