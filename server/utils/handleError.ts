import { H3Event, createError, sendError } from 'h3'

type CustomError = {
  status: number
  message: string
  body: any
}

export default function handleError(err: CustomError, event: H3Event) {
  const error = createError({
    statusCode: err.status,
    statusMessage: err.message,
    data: err.body,
  })
  sendError(event, error, false)
}
