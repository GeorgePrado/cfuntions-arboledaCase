import { BigQuery } from '@google-cloud/bigquery'

import axios, { AxiosResponse } from 'axios'
import { tokenAuthorizationBody, urlAuthorization, urlCdFiRoute, urlCdFiShipment } from '../../utils'
import { errorMeLi, GE } from '../utils'

type Process = {
    type:
        | 'insert'
        | 'update'
        | 'delete'
}

type DtoArboledaServiceResponse = 
    | DtoMeLiConsignmentNoteResponse
    | any

/*
type Process = {
    type: 
        | 'authorizeToken'
        | 'consignmentNoteShipment'
        | 'consignmentNoteRoute'
}

type DtoMeLiServiceRequest = 
    | DtoMeLiConsignmentNoteShipmentRequest
    | DtoMeLiConsignmentNoteRouteRequest
    | DtoMeLiTokenRequest

type DtoMeLiServiceResponse = 
    | DtoMeLiConsignmentNoteResponse
    | DtoMeLiTokenResponse
    | DtoMeLiCdFiRouteResponse
 */

class DataSetService {
    private _args: any;
    
    constructor(args: any){
        this._args = args;
    }

    public process({type}: Process) {

    }
}
/*
class ArboledaService{
    private _args: DtoMeLiServiceRequest

    constructor(args: DtoMeLiServiceRequest){
        this._args = args
    }

    public process({type}: Process): Promise<DtoMeLiServiceResponse>{
        switch(type){
            case 'authorizeToken':
                return this._authorizeToken()
            case 'consignmentNoteShipment':
                return this._consignmentNoteShipment()
            case 'consignmentNoteRoute':
                return this._consignmentNoteRoute()
        }
    }

    private async _authorizeToken(): Promise<DtoMeLiServiceResponse> {
        try{
            const resMeLi = await axios.post<tokenMercadoLibreRequest, AxiosResponse<tokenMercadoLibreResponse>>(
                urlAuthorization,
                tokenAuthorizationBody
            )
            const { data } = resMeLi
            console.log(`Token authorization: ${data.token_type} ${data.access_token}`)
            return {success: true, token: data.access_token}
        } catch(error){
            console.log('Errors form MeLi in authorize token')
            return errorMeLi(error, GE.INTERNAL_SERVER_ERROR)
        }
    }

    private async _consignmentNoteShipment(): Promise<DtoMeLiServiceResponse>{
        try{
            const args = this._args as DtoMeLiConsignmentNoteShipmentRequest
            const { shipmentId, token} = args
            console.log(`args: shipmentId: ${shipmentId}, token: ${token}`)
            if(!token)
                throw new Error('token missing')
            const resMeLi = await axios.get<null, AxiosResponse<DtoMeLiConsignmentNoteResponse>>(
                urlCdFiShipment.replace('@shipment', shipmentId)
                    .replace('@accessToken', token)
            )
            const { data } = resMeLi
            console.log(`return: ${JSON.stringify(data)}`)
            return data
        } catch(error){
            if(axios.isAxiosError(error)){
                console.log(`Error of Mercado Libre: ${JSON.stringify(error.response?.data)}`)
                return error.response?.data
            }
            return errorMeLi(error, GE.INTERNAL_SERVER_ERROR)
        }
    }

    private async _consignmentNoteRoute(): Promise<DtoMeLiServiceResponse>{
        try{
            const args = this._args as DtoMeLiConsignmentNoteRouteRequest
            const { routeId, token} = args
            console.log(`args: routeId: ${routeId}, token: ${token}`)
            if(!token)
                throw new Error('token missing')
            const resMeLi = await axios.get<null, AxiosResponse<DtoMeLiCdFiRouteResponse>>(
                urlCdFiRoute.replace('@route', routeId)
                    .replace('@accessToken', token)
            )
            const { data } = resMeLi
            console.log(`return: ${JSON.stringify(data)}`)
            return data
        } catch(error){
            if(axios.isAxiosError(error)){
                console.log(`Error of Mercado Libre: ${JSON.stringify(error.response?.data)}`)
                return error.response?.data
            }
            return errorMeLi(error, GE.INTERNAL_SERVER_ERROR)
        }
    }
}

*/

export { DataSetService }