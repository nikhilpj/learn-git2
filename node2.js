var http = require('http')
var fs = require('fs')
var url= require('url')
http.createServer(function (req,res)
{
    var q = url.parse(req.url,true)
    //console.log(q.pathname)
    if(q.pathname==='/')
    {
        fs.readFile('hi.html',function(err,hai){

            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(hai)
            res.end()
        })
    }
    else if(q.pathname==='/signup')
    {
        fs.readFile('form.html',function(err,login){
          res.writeHead(200,{'Content-Type':'text/html'})
            res.write(login)
        res.end()
        })
    }
    else if(q.pathname==='/signupaction'){
        console.log(q.query)
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h6>'+q.query.fname+'<h6>')
        res.end()

    }
    else{
        fs.readFile('sample.html',function(err,errorsa){
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write(errorsa)
        res.end()
        }) 
    }
}).listen(7000,()=>console.log('server started'))