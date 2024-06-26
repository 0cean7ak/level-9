const express = require("express");
const app = express();

app.get('/express',(req,res)=>{
    res.send('<h1>Hello sever!!</h1>');
});

app.get('/:ingoo', (req,res) => {
    let name = req.params.ingoo
    res.send(`<h1>Hello ${name}</h1>`)
});

app.listen(3000, () => {
    console.log('sever onload');
})

