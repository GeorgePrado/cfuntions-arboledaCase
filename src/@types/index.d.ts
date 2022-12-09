type ExpressRequest = import('express').Request

interface CustomRequest extends ExpressRequest {
  enterpriseID?: number
  enterpriseKey?: string
  headers: import('http').IncomingHttpHeaders & {
    'enterprise-key'?: string
  }
}
