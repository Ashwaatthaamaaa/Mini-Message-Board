#! /usr/bin/env node
const pool = require('./pool');

const query = `
TRUNCATE TABLE messages RESTART IDENTITY;
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
