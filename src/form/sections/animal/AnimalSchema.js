import Joi from 'joi';

const animalSchema = Joi.object().keys({
    colour: Joi.string().label('Colour').required(),
    animals: Joi.array().label('Animal').min(2).required(),
    tigerType: Joi.string().label('Type of Tiger').when('animals',{
        is: Joi.array().exist().has('tiger'),
        then: Joi.required()
    })
});

export default animalSchema