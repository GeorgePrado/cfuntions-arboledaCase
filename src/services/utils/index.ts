import httpErrors from 'http-errors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorMeLi = (e: any, message?: string): never => {
  console.error(JSON.stringify(e))

  if (e instanceof httpErrors.HttpError) throw e
  throw new httpErrors.InternalServerError(message ?? e.message)
}

export * from './messages'
