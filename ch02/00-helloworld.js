/** A basic server */

// http is a node module
// creates an instance of an object of type http
const http = require('http')
const port = process.env.PORT || 3000
//createServer is a method in the http module that creates an event listener for any connection
const server = http.createServer((req, res) => {
   //•this returns code 200 (ok) to the client
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  //•it sends back the strings to the client and closes the communication
  res.end('Hello world!')
})

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'))

