import { NextFunction, Request, Response, Router } from 'express'
import { ValidationError } from 'joi'
import { response } from '../../response'
import { ConsignmentNoteService, GE } from '../../../services'
import { MercadoLibreError } from '../../../utils/customError'
import { mercadoLibreCdFiSchema } from '../schemas'

const MercadoLibre = Router()
const operationRouter = Router()

MercadoLibre.use(
    '/meli/cdfi',
    operationRouter
)

operationRouter
    .route('/authorize')
    .get(
        async (
            req: CustomRequest,
            res: Response,
            next: NextFunction
        ): Promise<void> => {
            try {
                const cns = new ConsignmentNoteService({auth: 'token'})
                const result = await cns.process({type: 'authorizeToken'})
                response(result, res, 200)
            } catch(error) {
                if(error instanceof ValidationError)
                    return next(
                        new MercadoLibreError(
                            error.details.map(({ message }) => message).join('. ')
                        )
                    )
                const err = new MercadoLibreError(GE.INTERNAL_SERVER_ERROR)
                next(err)
            }
        }
    )
    .all((req: Request, res: Response, next: NextFunction) =>
        next(new MercadoLibreError(GE.METHOD_NOT_ALLOWED))
    )

operationRouter
    .route('/shipment')
    .post(
        async (
            req: CustomRequest,
            res: Response,
            next: NextFunction
        ): Promise<void> => {
            try {
                const {body} = req
                await mercadoLibreCdFiSchema.validateAsync(body)
                const cns = new ConsignmentNoteService(body)
                const result = await cns.process({type: 'consignmentNoteShipment'})
                response(result, res, 200)
            } catch(error) {
                if(error instanceof ValidationError)
                    return next(
                        new MercadoLibreError(
                            error.details.map(({ message }) => message).join('. ')
                        )
                    )
                const err = new MercadoLibreError(GE.INTERNAL_SERVER_ERROR)
                next(err)
            }
        }
    )
    .all((req: Request, res: Response, next: NextFunction) =>
        next(new MercadoLibreError(GE.METHOD_NOT_ALLOWED))
    )

operationRouter
    .route('/route')
    .post(
        async (
            req: CustomRequest,
            res: Response,
            next: NextFunction
        ): Promise<void> => {
            try {
                const {body} = req
                await mercadoLibreCdFiSchema.validateAsync(body)
                const cns = new ConsignmentNoteService(body)
                const result = await cns.process({type: 'consignmentNoteRoute'})
                response(result, res, 200)
            } catch(error) {
                if(error instanceof ValidationError)
                    return next(
                        new MercadoLibreError(
                            error.details.map(({ message }) => message).join('. ')
                        )
                    )
                const err = new MercadoLibreError(GE.INTERNAL_SERVER_ERROR)
                next(err)
            }
        }
    )
    .all((req: Request, res: Response, next: NextFunction) =>
        next(new MercadoLibreError(GE.METHOD_NOT_ALLOWED))
    )

export { MercadoLibre }