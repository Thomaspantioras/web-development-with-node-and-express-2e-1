const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// configure Handlebars view engine. (creates a view engine and configures Express to use it by default.)
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

// the view engine will return a content type of text/html and a status code of 200 by default. 
// In the catchall handler, which provides our custom 404 page, and the 500 handler, we have to set the status code explicitly.

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => res.render('about'))

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))
