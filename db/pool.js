import { Connection, pool } from 'pg';

module.exports = new pool({
    connectionString: "postgresql://lunge:291152@localhost:5432/top_users",
})