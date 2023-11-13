const express=require('express');

let app=express()
let port=8000
require('./model/index')
const userctrl=require('./controller/userController')
app.get('/',(req,res)=>{
     res.send('hello')
})

app.get('/add',userctrl.addUser)

app.listen(port,()=>{
    console.log('running on port 8000')
})