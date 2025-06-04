import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development')
    .required(),

  PORT: Joi.number().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),

  COOKIE_SIGNING_KEY: Joi.string().required(),

  S3_BUCKET_NAME: Joi.string().required(),
  S3_BUCKET_REGION: Joi.string().required(),
  S3_BUCKET_ACCESS_KEY_ID: Joi.string().optional(),
  S3_BUCKET_SECRET_ACCESS_KEY: Joi.string().optional(),
});
