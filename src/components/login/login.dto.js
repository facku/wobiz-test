import Joi from 'joi'

const schema = Joi.object({
  username: Joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi
    .string()
    .min(6)
    .max(16)
    .required()
})

export default schema
