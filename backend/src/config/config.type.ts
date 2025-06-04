export type NodeEnv = 'development' | 'production';

export type S3Config = {
  bucketName: string;
  region: string;
  accessKeyId?: string;
  secretAccessKey?: string;
};

export type Config = {
  nodeEnv: NodeEnv;
  port: number;
  jwt: {
    secret: string;
    expiresIn: string;
  };

  cookie: {
    signingKey: string;
  };
  s3: S3Config;
};
