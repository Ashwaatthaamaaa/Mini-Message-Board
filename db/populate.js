#! /usr/bin/env node
const pool = require('./pool');

const query = `
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(3000),
        username VARCHAR(255),
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (text, username)
    VALUES
    ('Hi there!', 'Amando'),
    ('Hello World!', 'Charles');
`;

async function main() {
    try {
        await pool.query(query);
    } catch(err) {
        console.error('error populating', err);
    } finally {
        await pool.end();
    }
}

main();
