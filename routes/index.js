const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

router.get('/new',(req,res)=>{
    res.render('form');
})

router.post('/new',(req,res)=>{
    messages.push({text:req.body.message, user:req.body.author, added: new Date()});
    res.redirect('/');
})

router.get('/message/:id/details',(req,res)=>{
    const id = req.params.id;
    res.render('details',{message:messages[id]})
})


router.get('/', (req, res) => {
    res.render('index', { messages: messages });
});



module.exports = router;
  