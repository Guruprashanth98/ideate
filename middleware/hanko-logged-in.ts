import { withQuery } from 'ufo'
import {
  defineNuxtRouteMiddleware,
  navigateTo,
  useAppConfig,
  useHanko,
  useRequestEvent,
  useRouter,
} from '#imports'

export default defineNuxtRouteMiddleware(
  async (to) => {
    const redirects =
      useAppConfig().hanko.redirects

    if (process.server) {
      const event = useRequestEvent()

      if (
        !event.context.hanko?.sub &&
        to.path !== redirects.login
      ) {
        return navigateTo(
          withQuery(redirects.login, {
            redirect: to.path,
          }),
        )
      }
      return
    }

    const hanko = useHanko()!

    const hankoUser = await hanko.user
      .getCurrent()
      .catch(() => null)

    if (hankoUser)
      useUser().setUserId(hankoUser.id)
    if (
      !hankoUser &&
      to.path !== redirects.login
    ) {
      return navigateTo(
        withQuery(redirects.login, {
          redirect: to.path,
        }),
      )
    }

    const removeHankoHook = hanko.onUserLoggedOut(
      () => {
        return navigateTo(
          withQuery(redirects.login, {
            redirect: to.path,
          }),
        )
      },
    )
    const removeRouterHook =
      useRouter().beforeEach(() => {
        removeHankoHook()
        removeRouterHook()
      })
  },
)
