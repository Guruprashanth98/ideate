<script setup lang="ts">
import { PanelLeftClose } from 'lucide-vue-next'
const { sidebarExpanded } = useSidebarState()

const panelIconClick = () => {
  sidebarExpanded.value = !sidebarExpanded.value
}
</script>

<template>
  <div>
    <Header></Header>
    <main>
      <div
        v-auto-animate
        class="flex min-h-[calc(100vh-57px)] justify-start pr-4 2xl:container"
      >
        <ClientOnly>
          <Sidebar />
        </ClientOnly>

        <div
          class="w-full pl-7 pt-5 min-h-[inherit] relative"
        >
          <ClientOnly>
            <PanelLeftClose
              :style="{
                transform: `rotate(${
                  sidebarExpanded ? 0 : 180
                }deg)`,
              }"
              class="transition-transform w-[15px] h-[15px] cursor-pointer mr-1 absolute top-12 left-0 font-semibold stroke-1 hover:stroke-2"
              @click="panelIconClick"
            />
          </ClientOnly>
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
