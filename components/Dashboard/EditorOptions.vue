<script setup lang="ts">
import {
  ChevronDown,
  Code,
  Image,
  Link,
} from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const props = defineProps<{
  addCode: () => void
  addLink: (type: 'link' | 'image') => void
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UiButton
        variant="outline"
        class="px-2 h-6 flex justify-center items-center pr-1"
      >
        Tools<ChevronDown class="w-4 ml-3"
      /></UiButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="mr-[85px] mt-0 w-[160px]"
    >
      <DropdownMenuGroup>
        <DropdownMenuItem @click="props.addCode">
          <Code class="mr-2 h-4 w-4" />
          <span>Add Code Block</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          @click="() => props?.addLink('link')"
        >
          <Link class="mr-2 h-4 w-4" />
          <span>Add Link</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          @click="() => props?.addLink('image')"
        >
          <Image class="mr-2 h-4 w-4" />
          <span>Add Image Link</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
