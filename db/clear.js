#! /usr/bin/env node
const pool = require('./pool');

const query = `
    DELETE FROM messages;
`;

async function main() {
    try {
        await pool.query(query);
        console.log('db cleared');
    } catch(err) {
        console.error('error populating', err);
    } finally {
        await pool.end();
    }
}

main();
