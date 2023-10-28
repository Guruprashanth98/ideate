<script setup lang="ts">
import { PanelLeftClose } from 'lucide-vue-next'
const { sidebarExpanded } = useSidebarState()
const angle = ref(0)

const panelIconClick = () => {
  sidebarExpanded.value = !sidebarExpanded.value
  if (sidebarExpanded) {
    angle.value = angle.value + 180
  } else {
    angle.value = angle.value - 180
  }
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
        <ClientOnly><Sidebar /></ClientOnly>
        <div
          class="w-full pl-7 pt-5 min-h-[inherit] relative"
        >
          <ClientOnly>
            <PanelLeftClose
              :style="{
                transform: `rotate(${angle}deg)`,
              }"
              class="transition-transform w-[25px] h-[20px] cursor-pointer mr-1 absolute top-12 left-0 font-bold opacity-80"
              @click="panelIconClick"
            />
          </ClientOnly>
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
