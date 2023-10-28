import {
  H3Event,
  createError,
  sendError,
} from 'h3'

type CustomError = {
  statusCode: number
  message: string
  body?: any
}

export default function handleError(
  status: Number | String,
  event: H3Event,
  err?: CustomError | any,
) {
  let error: any | undefined
  if (status === 401 && !err) {
    error = createError({
      status: 401,
      message: 'Unauthorized',
    })
    sendError(event, error, false)
  } else {
    error = createError({
      statusCode: err?.statusCode,
      statusMessage: err.message,
      data: err.body,
    })
    sendError(event, error, false)
  }
}
