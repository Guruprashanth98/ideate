import { H3Event } from 'h3'
import {
  createRemoteJWKSet,
  jwtVerify,
} from 'jose'
import handleError from '../utils/handleError'
import HankoConfig from '../utils/hankoConfig'

export default defineEventHandler(
  async (event: H3Event) => {
    const serverSideRoutes =
      getRequestURL(event).pathname.startsWith(
        '/api',
      )

    // Check for JWT
    if (serverSideRoutes) {
      const hankoConfig = new HankoConfig()
      const hankoApiUrl =
        hankoConfig.getHankoUrl()
      const jwt = getCookie(
        event,
        hankoConfig.getCookieName(),
      )

      // postman header
      // const postManJwt = getRequestHeader(event, 'Authorization')
      // jwt = postManJwt?.split(' ')[1]

      if (!jwt) handleError(401, event)

      // check valid JWT
      const JWKS = createRemoteJWKSet(
        new URL(
          `${hankoApiUrl}/.well-known/jwks.json`,
        ),
      )
      try {
        await jwtVerify(jwt ?? '', JWKS)
      } catch {
        if (serverSideRoutes)
          handleError(401, event)
      }
    }

    // check for valid JWT
    event.context.auth = {
      authenticated: true,
      user: 'user',
    }
  },
)
