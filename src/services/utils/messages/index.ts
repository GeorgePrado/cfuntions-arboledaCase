enum GenericErrors {
  INTERNAL_SERVER_ERROR = 'Something went wrong',
  MISSING_ENTERPRISE_KEY = 'Missing enterprise-key!',
  METHOD_NOT_ALLOWED = 'The requested http method is not supported',
  WRONG_ENTERPRISE_KEY = 'The provided enterprise-key is not correct!'
}

export { GenericErrors as GE }
