import Joi from 'joi';

function validate(data = {}, schema = {}) {
    const {error} = Joi.validate(data, schema, {abortEarly: false});
    let errors = null;
    if(error) {
        errors = error.details.reduce((acc, current) => {            
            acc[current.context.key] = {
                message: current.message,
            }
            return acc;
        }, {})
    }

    return {
        errors,
        hasError: !!errors
    };
}

export default {
    validate
};