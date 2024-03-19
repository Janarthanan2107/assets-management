// config.js
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
    DB_DIALECT
} = process.env;

if (!DB_USERNAME || !DB_PASSWORD || !DB_DATABASE || !DB_HOST || !DB_PORT || !DB_DIALECT) {
    throw new Error('Missing required environment variables for database configuration.');
}

export const sequelizeConfig = new Sequelize({
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
});
