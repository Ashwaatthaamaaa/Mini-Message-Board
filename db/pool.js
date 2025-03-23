const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

const connectionString = process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL_PROD
    : process.env.DATABASE_URL_DEV;

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false // Only if using a self-signed certificate
    }
});

module.exports = pool;