export default defineEventHandler(async (event) => {
  const hanko = await event.context.hanko
  // if (requestUrl.password)
  if (!hanko || !hanko.sub) {
    return {
      status: 401,
      body: {
        message: 'Unauthorized',
      },
    }
  }
  // Do something with the Hanko user
  return {
    hanko: event.context.hanko,
  }
})
