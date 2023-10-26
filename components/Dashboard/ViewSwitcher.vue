<script setup lang="ts">
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { View } from '@/types/view'
const { view, setView } = useView()
function tabUpdate(modelValue: View) {
  setView(modelValue)
}
</script>

<template>
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
      >
        Edit
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
