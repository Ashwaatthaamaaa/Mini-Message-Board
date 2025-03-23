const { addMessage ,getDetails,getAll} = require('../db/queries');

const express = require('express');
const router = express.Router();

// const messages = [
//     { id: 0, text: "Hi there!", user: "Amando", added: new Date() },
//     { id: 1, text: "Hello World!", user: "Charles", added: new Date() }
// ];

router.get('/new',(req,res)=>{
    res.render('form');
})

router.post('/new', async (req,res) => {
    try {
        const message = req.body.message;
        const author = req.body.author;
        await addMessage(message, author);
        res.redirect('/');
    } catch (err) {
        console.error('Failed to add message:', err);
        res.status(500).send('Error saving message');
    }
})

router.get('/message/:id/details', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10); // Convert ID to an integer
        const details = await getDetails(id); // Use the ID directly
        
        if (!details) {
            return res.status(404).send('Message not found');
        }
        
        res.render('details', { user:details.username,message: details.text, date: details.added });
    } catch (err) {
        console.error('Error fetching details:', err);
        res.status(500).send('Error fetching message details');
    }
});


router.get('/', async (req, res) => {
    const messages = await getAll();
    res.render('index', { messages: messages });
});



module.exports = router;