import { User } from '@/types/collections'

export const useUser = () => {
  const initUser: User = {
    id: '',
    created_at: '',
    theme: null,
  }

  const user = useState<User>(
    'user',
    () => initUser,
  )

  function setUser(payload: User) {
    user.value = payload
  }

  function setUserId(payload: string) {
    user.value.id = payload
  }

  return { user, setUser, setUserId }
}
