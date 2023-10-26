import { View } from '~/types/types'

export const useView = () => {
  const initView = 'reader'

  function setView(modelValue: View) {
    view.value = modelValue
  }
  const view = useState<View>(
    'view',
    () => initView,
  )
  return { view, setView }
}
