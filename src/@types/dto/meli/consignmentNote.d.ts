interface DtoMeLiConsignmentNoteShipmentRequest {
    shipmentId: string
    token?: string
}

interface DtoMeLiConsignmentNoteRouteRequest {
    routeId: string
    token?: string
}

interface DtoMeLiTokenRequest {
    auth: string
}

interface DtoMeLiConsignmentNoteResponse {
    recipient: DtoMeLiCdFiRecipientResponse
    origin: DtoMeLiCdFiOriginResponse
    destination: DtoMeLiCdFiOriginResponse
    package: DtoMeLiCdFiPackageItemResponse
}

interface DtoMeLiCdFiRecipientResponse {
    rfc: string
    full_name: string
}

interface DtoMeLiCdFiOriginResponse {
    fiscal_information: DtoMeLiCdFiOriginFiscalInfoResponse
    address: DtoMeLiCdFiOriginAddressResponse
}

interface DtoMeLiCdFiOriginFiscalInfoResponse {
    full_name: string
    rfc: string
    fiscal_residence: string
}

interface DtoMeLiCdFiOriginAddressResponse {
    address_line: string
    street_name: string
    street_number: string
    intersection: string
    zip_code: string
    city: DtoMeLiCdFiOriginLocationResponse
    state: DtoMeLiCdFiOriginLocationResponse
    country: DtoMeLiCdFiOriginLocationResponse
    neighborhood: DtoMeLiCdFiOriginLocationResponse
    municipality: DtoMeLiCdFiOriginLocationResponse
}

interface DtoMeLiCdFiOriginLocationResponse {
    id: string
    name: string
}

interface DtoMeLiCdFiPackageResponse {
    items: DtoMeLiCdFiPackageItemResponse[]
    total_items: number
}

interface DtoMeLiCdFiPackageItemResponse {
    category: number
    description: string
    unit_code: string
    quantity: string
    dimensions: DtoMeLiCdFiPackageItemDimensionsResponse
}

interface DtoMeLiCdFiPackageItemDimensionsResponse {
    height: number
    width: number
    length: number
    weight: number
}

interface DtoMeLiTokenResponse {
    success: boolean
    token: string
}

interface DtoMeLiCdFiRouteResponse {
    id: string
    cost: number
    shipments: DtoMeLiCdFiRouteShipmentResponse[]
}

interface DtoMeLiCdFiRouteShipmentResponse {
    id: string
    url: string
}