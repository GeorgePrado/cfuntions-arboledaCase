interface tokenMercadoLibreResponse {
    access_token: string
    token_type: string
    expires_in: number,
    scope: string
    user_id: number
}

interface tokenMercadoLibreErrorResponse {
    error: string
    status: number
    message: string
    cause: string[]
}