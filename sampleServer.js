var https = require('https')
const port=3000
const server=https.createServer(function (a,b){
    b.write("steel")
    b.end()
})
server.listen(port,function (err){
    if(err)
    {
        console.log("something went wrong",err)
    }
    else{
        console.log("server is listening on port "+port)
    }
})

