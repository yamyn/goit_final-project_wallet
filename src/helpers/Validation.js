import * as Joi from '@hapi/joi';

const INVALIDVALUE = {
    name:
        'The name must contain only the letters a-z, A-C and a space, with length from 3 to 20 characters',
    number:
        'The number must contain only integers from 0-9, 10 characters long',
    notUnique: 'Contact already exist!',
};

export const META = {
    error: 'error',
    success: 'success',
};

const schema = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Z ]{3,20}$/)
        .trim()
        .required(),
    number: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),
});

class Validation {
    constructor(validSchema) {
        this.schema = validSchema;
    }

    validate = (contacts, contact) => {
        const { error, value } = this.schema.validate(contact);
        if (error) {
            return this.errorTransform(error);
        }

        const isUniqueName = this.checkUnique(contacts, contact);
        if (isUniqueName) {
            return { message: INVALIDVALUE.notUnique, meta: META.error };
        }

        return { contact: value, meta: META.success };
    };

    errorTransform = error => {
        if (error.details[0].type === 'string.empty') {
            return { message: error.message, meta: META.error };
        }
        const incorrValue = error.details[0].path[0];

        return { message: INVALIDVALUE[incorrValue], meta: META.error };
    };

    checkUnique = (contacts, contact) => {
        return contacts.some(
            savedContact =>
                savedContact.name.toLowerCase() === contact.name.toLowerCase(),
        );
    };
}

export default new Validation(schema);
