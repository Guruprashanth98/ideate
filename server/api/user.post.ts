import { H3Event } from 'h3'
import { supabase } from '../utils/supabase'

async function createUser(event: H3Event, _email: string) {
  const { data, error } = await supabase
    .from('user')
    .insert([{ email: _email }])
    .select()

  if (error) {
    handleError(500, event, error)
    return
  }
  return {
    user: data[0],
  }
}

export default defineEventHandler(async (event: H3Event) => {
  const { email: _email } = await readBody(event)

  // Check if user exists if not return 401
  const { data, error } = await supabase
    .from('user')
    .select('*')
    .eq('email', _email)
    .limit(1)

  // If user not found
  // Create new user
  if (data?.length === 0) return createUser(event, _email)
  else if (error) handleError(error.code, event, error)
  else {
    return {
      user: data[0],
    }
  }
})
