import { H3Event, createError } from 'h3'

type CustomError = {
  statusCode: number
  message: string
  body?: any
}
export default function handleError(
  status: Number | String,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  event?: H3Event,
  err?: CustomError | any,
) {
  let error: any | undefined
  if (status === 401 && !err) {
    error = createError({
      status: 401,
      message: 'Unauthorized',
    })
    throw error
  } else {
    error = createError({
      statusCode: err?.statusCode,
      statusMessage: err?.message,
      data: err?.body,
    })
    throw error
  }
}
