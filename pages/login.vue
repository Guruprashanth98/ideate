<script setup lang="ts">
const { setUser } = useUser()
const signUp = async (e: CustomEvent) => {
  const hankoUserId = e.detail.userID
  const { data, error } = await useFetch(
    '/api/user',
    {
      method: 'post',
      body: { user_id: hankoUserId },
    },
  )
  if (data.value) {
    setUser(data.value.user)
    navigateTo('/')
  }
  if (error.value) {
    /* eslint-disable no-console */
    console.log(error.value)
  }
}
</script>

<template>
  <div
    class="container relative grid min-h-[100vh] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
    >
      <div
        class="absolute inset-0 bg-[#101010] flex flex-col items-center justify-center"
      >
        <h1
          class="absolute lg:top-[200px] xl:top-[140px] left-[50%] lg:translate-x-[-60%] xl:translate-x-[-50%] scroll-m-20 text-7xl font-extrabold tracking-tight xl:text-8xl"
        >
          Ideate.
        </h1>
        <img
          src="../assets/ideate-landing.png"
          class=""
        />
      </div>
      <div
        class="relative z-20 flex items-center text-lg font-medium"
      >
        <!-- <img
          src="../public/ideate-logo-light-thin.png"
          width="22px"
          class="mr-2"
        /> -->
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg"></p>
          <footer class="text-sm"></footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
      >
        <div
          class="flex flex-col space-y-2 text-center"
        >
          <!-- <h1 class="text-2xl font-semibold tracking-tight">
            Create an account
          </h1> -->
          <!-- <p class="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p> -->
        </div>
        <!-- <UserAuthForm /> -->
        <!-- eslint-disable vue/v-on-event-hyphenation -->
        <hanko-auth
          class="hanko-auth"
          @onAuthFlowCompleted="signUp"
        />
        <!-- <hanko-event  /> -->
      </div>
    </div>
  </div>
</template>
