const express=require('express');

let app=express()
const bodyParser = require('body-parser');
let port=8000
require('./model/index')
const userctrlc=require('./controller/createp/createCommet')
const userctrl=require('./controller/createp/addvedios')
const userctrli=require('./controller/createp/addimage')
const dataGetting=require('./controller/findOrget/vedioGeting')



app.use(bodyParser.json());
app.get('/',(req,res)=>{
     res.send('hello')
})

// create----------------

app.get('/addcommet/:id',userctrlc.addcommet)
app.get('/addvedios',userctrl.addvedios)
app.get('/addimages',userctrli.addimages)

// gettt ---------------------------
app.get('/getvideos',dataGetting.vedio)
app.get('/getimages',dataGetting.image)
app.get('/getcommits',dataGetting.commet)

// realtion --------------------------
app.get('/polymorfic',dataGetting.polymorfic)








app.listen(port,()=>{
    console.log('running on port 8000')
})