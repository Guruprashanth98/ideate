import { createRemoteJWKSet, jwtVerify } from 'jose'
import handleError from '../utils/handleError'

export default defineEventHandler(async (event) => {
  const serverSideRoutes = getRequestURL(event).pathname.startsWith('/api')

  const errorObject = {
    status: 401,
    message: 'Unauthorized',
    body: {},
  }

  // Check for JWT
  if (serverSideRoutes) {
    const jwt = getCookie(event, 'hanko')
    const hankoApiUrl = process.env.HANKO_API_URL
    // postman header
    // const postManJwt = getRequestHeader(event, 'Authorization')
    // jwt = postManJwt?.split(' ')[1]
    if (!jwt) handleError(errorObject, event)

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
