const express=require('express');

let app=express()
let port=8000
require('./model/index')
const userctrl=require('./controller/userController')
app.get('/',(req,res)=>{
     res.send('hello')
})

app.get('/add',userctrl.addUser)
app.get('/create',userctrl.curdCreate)
app.get('/curdUpdate',userctrl.curdUpdate)
app.get('/curdDelete',userctrl.curdDelete)
app.get('/curdfindAll',userctrl.curdfindAll)
app.get('/queryUser',userctrl.queryUser)
app.get('/queryfindAll',userctrl.queryfindAll)
app.get('/querycondition',userctrl.querycondition)
app.get('/finders',userctrl.finders)
app.get('/validtion',userctrl.validtion)
app.get('/rawQuerry',userctrl.rawQuerry)








app.listen(port,()=>{
    console.log('running on port 8000')
})