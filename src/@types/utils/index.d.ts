type LngLatPoint = [longitude: number, latitude: number]
type PointType = 'pickUpPoint' | 'dropPoint'
type Point = {
    coordinates: LngLatPoint
    type: 'point'
}
type Polygon = {
    coordinates: LngLatPoint
    type: 'Polygon'
}
type OriginType = 'pickUpAddress' | 'dropAddress' | 'pickUpPoint' | 'dropPoint'
type AddressType = 'recojo' | 'destino'
type AddressWithZipCode = {
    address: string
    zipCode?: string
}