import Joi from 'joi';

const detailSchema = Joi.object().keys({
    email: Joi.string().email({minDomainAtoms:2}).required(),
    password: Joi.string().min(8).required()
});

export default detailSchema;