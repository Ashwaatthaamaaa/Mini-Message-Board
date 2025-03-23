const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgresql://lunge:cmqgDT7Y8fbjrF9tojUl1fX0dGsUfNa6@dpg-cvfgillsvqrc73d1dif0-a/message_pumz",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;