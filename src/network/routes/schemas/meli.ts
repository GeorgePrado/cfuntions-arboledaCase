import Joi from 'joi'

const defaultStringValues = [null]

export const mercadoLibreCdFiSchema = Joi.object().keys({
    shipmentId: Joi.string().allow(...defaultStringValues),
    routeId: Joi.string().allow(...defaultStringValues),
    token: Joi.string().allow(...defaultStringValues)
})