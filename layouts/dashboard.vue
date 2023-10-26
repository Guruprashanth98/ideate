<template>
  <div>
    <Header></Header>
    <main>
      <div
        class="flex min-h-[calc(100vh-56px)] justify-start pr-4 2xl:container"
      >
        <ClientOnly><Sidebar /></ClientOnly>
        <div class="w-full border-l py-5 pl-5">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
