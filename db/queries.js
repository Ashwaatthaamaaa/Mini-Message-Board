const pool = require('./pool');

async function addMessage(message, username) {
    if (!message || !username) {
        throw new Error('Message and username are required');
    }

    try {
        await pool.query('INSERT INTO messages(text, username) VALUES($1, $2)', [message, username]);
    } catch (err) {
        console.error('error populating', err);
        throw err;
    }
}


async function getDetails(id) {
    if (!id) {
        throw new Error('Id is required');
    }

    try {
        const details = (await pool.query('SELECT username, text, added FROM messages WHERE id = $1', [id])).rows[0];
        return details;
    } catch (err) {
        console.error('Error fetching', err);
        throw err;
    }
}


async function getAll() {
    try{
        const messages = await pool.query('Select id,text,username FROM messages');
        return messages.rows;
    }
    catch(err){
        console.error('couldn not fetch',err)
    }
}


module.exports = {
    addMessage,
    getDetails,
    getAll
};