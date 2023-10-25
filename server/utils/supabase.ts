import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/supabase'

const {
  public: {
    supabase: { key, url },
  },
} = useRuntimeConfig()

export const supabase = createClient<Database>(url, key)
