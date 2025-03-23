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


async function getDetails(id) {

    if(!id){
        throw new Error('Id is required');
    }

    try{
        const details = (await pool.query('SELECT text,added from messages WHERE id=$1',[id])).rows[0];
        console.log(details);
        return details;

    }catch(err){
        console.error('error fetching',err);
        throw err;
    }
    
}

module.exports = {
    addMessage,
    getDetails
};