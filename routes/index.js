const express = require('express');
const router = express.Router();

const messages = [
    { id: 0, text: "Hi there!", user: "Amando", added: new Date() },
    { id: 1, text: "Hello World!", user: "Charles", added: new Date() }
];

router.get('/new',(req,res)=>{
    res.render('form');
})

router.post('/new',(req,res)=>{
    const newMessage = { id: messages.length, text:req.body.message, user:req.body.author, added: new Date() };
    messages.push(newMessage);
    res.redirect('/');
})

router.get('/message/:id/details',(req,res)=>{
    const id = req.params.id;
    res.render('details',{message:messages.find(msg => msg.id == id)});
})


router.get('/', (req, res) => {
    res.render('index', { messages: messages });
});



module.exports = router;