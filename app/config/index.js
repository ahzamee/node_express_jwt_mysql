require('dotenv').config({ silent: true });
module.exports = {
    app: {
        name: 'DaktarLagbe',
        env: process.env.APP_ENV || 'production',
        secret: process.env.APP_SECRET,
        port: process.env.APP_PORT || '3000',
        domain: process.env.APP_DOMAIN || 'http://localhost',
    },
    s3: {
        public: {
            BUCKET_NAME: process.env.AWS_PUBLIC_BUCKET_NAME,
            BUCKET_REGION: process.env.AWS_PUBLIC_BUCKET_REGION,
            ACCESS_KEY: process.env.AWS_PUBLIC_ACCESS_KEY,
            SECRET_KEY: process.env.AWS_PUBLIC_SECRET_KEY,
            CDN_END_POINT: process.env.AWS_PUBLIC_CDN_ENDPOINT,
        },
    },
    db: {
        mysql: {
            DB_USER: process.env.DB_USER,
            DB_PASS: process.env.DB_PASS,
            DB_PORT: process.env.DB_PORT,
            DB_HOST: process.env.DB_HOST,
            DB_NAME: process.env.DB_NAME,
        },
    },
    token: {
        validity: process.env.TOKEN_EXPIRATION || '365d'
    }
};
