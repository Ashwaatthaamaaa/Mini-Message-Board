const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgresql://lunge:291152@localhost:5432/message"
});

module.exports = pool;