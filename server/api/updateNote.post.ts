import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const { note: _note } = await readBody(event)

  const { data, error } = await supabase
    .from('note')
    .update(_note)
    .eq('id', _note.id)
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
})
