const http = require('http');

// req - represents the incoming request
// res - represents the response which is sent back
const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href = "/">Back Home</a>
        `)
    }
})

server.listen(5000); //check this out on localhost:5000 