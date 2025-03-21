const pool = require('./pool');

async function addMessage(message, username) {
    if (!message || !username) {
        throw new Error('Message and username are required');
    }

    try {
        await pool.query('INSERT INTO messages(text, "user") VALUES($1, $2)', [message, username]);
    } catch (err) {
        console.error('error populating', err);
        throw err;
    }
}

module.exports = {
    addMessage
};