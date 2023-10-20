<script setup lang="ts">
import { cn } from '@/lib/utils'

// interface SidebarProps {
//   playlists: Playlist[]
// }

const playlists = [
  'Find max range',
  'Merge two sorted arrays Merge two sorted arrays',
  'Uber system design',
  'DNS service',
  'Top Artists',
  'Logic Discography',
  'Bedtime Beats',
  'Feeling Happy',
  'I miss Y2K Pop',
  'Runtober',
  'Mellow Days',
  'Merge two sorted arrays Merge two sorted arraysMerge two sorted arrays Merge two sorted arraysMerge two sorted arrays Merge two sorted arraysMerge two sorted arrays Merge two sorted arrays',
]
// defineProps<SidebarProps>()
</script>

<template>
  <div :class="cn('pb-12 max-w-xs', $attrs.class ?? '')">
    <div class="space-y-4 py-4 min-h-full hidden lg:block">
      <div class="px-3 py-2 w-full">
        <div class="py-2 w-full">
          <h1
            class="mb-2 ml-7 pr-7 py-3 text-xl font-semibold tracking-tight w-[80%] border-b"
          >
            Notes
          </h1>
          <UiScrollArea class="px-1 w-full">
            <div class="space-y-1 p-2 max-w-[15rem] overflow-hidden">
              <UiButton
                v-for="(playlist, i) in playlists"
                :key="`${playlist}-${i}`"
                variant="ghost"
                class="px-4 w-[14rem]"
              >
                <span class="truncate w-full text-left font-normal">{{
                  playlist
                }}</span>
              </UiButton>
            </div>
          </UiScrollArea>
        </div>
      </div>
    </div>
  </div>
</template>
