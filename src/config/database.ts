export default {
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_USERNAME,
    database: process.env.POSTGRES_PASSWORD,
  },
};
