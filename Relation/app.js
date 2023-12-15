const express=require('express');

let app=express()
let port=8000
require('./model/index')
const userctrl=require('./controller/emplyeeController')
app.get('/',(req,res)=>{
     res.send('hello')
})

app.get('/addEmplyee',userctrl.addEmplyee)
app.get('/emplyeeDetail',userctrl.emplyeeDetail)
app.get('/onetoone',userctrl.oneTo_one)
// app.get('/belongsTo',userctrl.belongsTo)
// app.get('/manyToMany',userctrl.manyToMany)
app.get('/PostCreate',userctrl.PostCreate)
app.get('/createTag',userctrl.createTag)
app.get('/createPostTag',userctrl.createPostTag)



// app.get('/post',userctrl.post)
















app.listen(port,()=>{
    console.log('running on port 8000')
})