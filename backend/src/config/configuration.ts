import { Config, NodeEnv } from './config.type';

export default (): Config => ({
  nodeEnv: process.env.NODE_ENV as NodeEnv,
  port: parseInt(process.env.PORT as string, 10) || 5000,

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },

  cookie: {
    signingKey: process.env.COOKIE_SIGNING_KEY as string,
  },

  s3: {
    bucketName: process.env.S3_BUCKET_NAME as string,
    region: process.env.S3_BUCKET_REGION as string,
    accessKeyId: process.env.S3_BUCKET_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.S3_BUCKET_SECRET_ACCESS_KEY as string,
  },
});
