import { User } from '~/types/types'

export const useUser = () => {
  const initUser: User = {
    id: null,
  }

  const user = useState<User>(
    'user',
    () => initUser,
  )

  function setUser(payload: User) {
    user.value = payload
  }

  return { user, setUser }
}
