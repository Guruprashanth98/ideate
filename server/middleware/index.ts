import { H3Event } from 'h3'
import { createRemoteJWKSet, jwtVerify } from 'jose'
import { Error } from '../models/error.dto'
import handleError from '../utils/handleError'
import HankoConfig from '../utils/hankoConfig'

const errorObject: Error = {
  status: 401,
  message: 'Unauthorized',
  body: {},
}

export default defineEventHandler(async (event: H3Event) => {
  const serverSideRoutes = getRequestURL(event).pathname.startsWith('/api')

  // Check for JWT
  if (serverSideRoutes) {
    const hankoConfig = new HankoConfig()
    const hankoApiUrl = hankoConfig.getHankoUrl()
    const jwt = getCookie(event, hankoConfig.getCookieName())

    // postman header
    // const postManJwt = getRequestHeader(event, 'Authorization')
    // jwt = postManJwt?.split(' ')[1]
    if (!jwt) handleError(errorObject, event)

    // check valid JWT
    const JWKS = createRemoteJWKSet(
      new URL(`${hankoApiUrl}/.well-known/jwks.json`),
    )
    try {
      await jwtVerify(jwt ?? '', JWKS)
    } catch {
      if (serverSideRoutes) handleError(errorObject, event)
    }
  }

  // check for valid JWT
  event.context.auth = {
    authenticated: true,
    user: 'user',
  }
})
