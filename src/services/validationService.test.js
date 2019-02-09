import validationService from './validationService';
import Joi from 'joi';

it('should return error when no value or schema is passed', () => {
    const result = validationService.validate(null, {});
    expect(result.hasError).toBe(true);
});

it('should validate the data based on schema definition', () => {
    const schema = Joi.object().keys({
        name: Joi.string().required()
    });
    const data = {name:''};
    const result = validationService.validate(data, schema);

    expect(result.hasError).toBeTruthy();
    expect(result.errors.name.message).toBe("\"name\" is not allowed to be empty");
});
