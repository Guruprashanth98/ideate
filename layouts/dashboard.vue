<template>
  <div>
    <Header></Header>
    <main>
      <div
        class="2xl:container flex justify-start min-h-[calc(100vh-56px)] pr-4"
      >
        <ClientOnly><Sidebar /></ClientOnly>
        <div class="border-l w-full pl-5 py-5">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
