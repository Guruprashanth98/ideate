import { Database } from './supabase'

export type User = Database['public']['Tables']['user']['Row']

export type Note = Database['public']['Tables']['note']['Row']

export type Decrypted_Note =
  Database['public']['Views']['decrypted_note']['Row']
