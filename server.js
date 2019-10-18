const http = require('http')  // require built-in Node.js http package

// Use hosting values if available, otherwise default 
const hostname = process.env.hostname || '0.0.0.0' // allow remote access
const port = process.env.PORT || 3002

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('This is Module 4: 01 Create a Node server / service\n')
  res.write('This script is given by Prof.Case\n')
  res.end('I just deploy it on heroku,it takes about 1 hour. Chen finished it at 2:30PM.\n')
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`)
})