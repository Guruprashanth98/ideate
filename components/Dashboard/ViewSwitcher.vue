<script setup lang="ts">
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { View } from '@/types/view'
const { setSidebarExpanded } = useSidebarState()
const { view, setView } = useView()
const { notes } = useNotes()
function tabUpdate(modelValue: View) {
  if (modelValue === 'editor') {
    setSidebarExpanded(false)
  }
  if (modelValue === 'reader') {
    setSidebarExpanded(true)
  }
  setView(modelValue)
}
</script>

<template>
  <ClientOnly>
    <Tabs
      :default-value="view"
      :model-value="view"
      @update:model-value="
        (modelValue) =>
          tabUpdate(modelValue as View)
      "
    >
      <TabsList class="h-9">
        <TabsTrigger
          value="reader"
          class="h-7 w-14"
        >
          Read
        </TabsTrigger>
        <TabsTrigger
          value="editor"
          class="h-7 w-14"
          :disabled="notes.length === 0"
        >
          Edit
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </ClientOnly>
</template>
