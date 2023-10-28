<script></script>

<template>
  <div>
    <Header></Header>
    <main class="mt-[56px]">
      <div
        class="flex min-h-[calc(100vh-57px)] justify-start pr-4 2xl:container"
      >
        <ClientOnly><Sidebar /></ClientOnly>
        <div
          class="h-[1px] w-full pl-5 pt-5 min-h-[inherit]"
        >
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
