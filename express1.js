const express=require('express')
const app = express()
const path = require('path')
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'))
})
app.use((req,res,next)=>{
    console.log('hello')
    next()
})
app.post('/login',(req,res)=>{
    res.send('post method')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.listen(3000,()=>{
    console.log("server started")
})