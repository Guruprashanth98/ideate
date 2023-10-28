import { View } from '@/types/view'

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
