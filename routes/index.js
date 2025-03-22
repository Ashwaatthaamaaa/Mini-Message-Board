const { addMessage ,getDetails} = require('../db/queries');

const express = require('express');
const router = express.Router();

const messages = [
    { id: 0, text: "Hi there!", user: "Amando", added: new Date() },
    { id: 1, text: "Hello World!", user: "Charles", added: new Date() }
];

router.get('/new',(req,res)=>{
    res.render('form');
})

router.post('/new', async (req,res) => {
    const newMessage = { id: messages.length, text:req.body.message, user:req.body.author, added: new Date() };
    messages.push(newMessage);
    try {
        await addMessage(req.body.message, req.body.author);
        res.redirect('/');
    } catch (err) {
        console.error('Failed to add message:', err);
        res.status(500).send('Error saving message');
    }
})

router.get('/message/:id/details',(req,res)=>{
    const id = req.params.id;
    let {message,Date} = getDetails(id)
    res.render('details',{message:message,date:Date});
})


router.get('/', (req, res) => {
    res.render('index', { messages: messages });
});



module.exports = router;