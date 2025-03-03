const express = require('express');
const app = express();
const path = require('path');


app.set('views',path.join(__dirname,'views','pages'));
app.set('view engine', 'ejs')



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}) 