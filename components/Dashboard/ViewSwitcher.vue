<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
    @update:model-value="(modelValue) => tabUpdate(modelValue as View)"
  >
    <TabsList class="h-9">
      <TabsTrigger value="reader" class="w-14 h-7"> Read </TabsTrigger>
      <TabsTrigger value="editor" class="w-14 h-7"> Edit </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
