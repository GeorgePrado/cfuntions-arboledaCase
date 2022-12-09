const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const apiRootUrl = 'https://api.mercadolibre.com'

export const urlAuthorization = `${apiRootUrl}/oauth/token`
export const urlCdFiShipment = `${apiRootUrl}/shipments/@shipment/carta-porte-details/last_mile?access_token=@accessToken`
export const urlCdFiRoute = `${apiRootUrl}/routes/@route/carta-porte-details?access_token=@accessToken`

export const tokenAuthorizationBody: tokenMercadoLibreRequest = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials"
}