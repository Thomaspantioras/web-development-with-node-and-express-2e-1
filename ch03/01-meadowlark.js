const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// app.get is the method by which we’re adding routes (app.METHOD eg get,post, ..)
// it doesn’t care about the case or trailing slash, and it doesn’t consider the querystring when performing the match. 
// Express defaults to a status code of 200
//We are also replacing Node’s res.writeHead with res.set and res.status. Express is also providing us a convenience method, res.type, which sets the Content-Type header. While it’s still possible to use res.writeHead and res.end, it isn’t necessary or recommended.
//  Express’s router strip off the querystring and the trailing slash and convert to lowercase for us automatically. 

app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('Meadowlark Travel')
})

app.get('/about', (req, res) => {
  res.type('text/plain')
  res.send('About Meadowlark Travel')
})

//app.use is the method by which Express adds middleware. think of this as a catchall handler for anything that didn’t get matched by a route. 
// so in Express, the order in which routes and middleware are added is significant.

// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))
