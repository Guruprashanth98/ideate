import { H3Event } from 'h3'
export default function hankoContext(
  event: H3Event,
) {
  const hanko = event.context.hanko
  if (!hanko || !hanko.sub) {
    handleError(401, event)
  }
  return {
    user: hanko.user,
  }
}
