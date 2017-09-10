const express = require('express')
const path = require('path')

const app = express()

const error = (err, response, body) => console.log('ERROR [%s]', err) // eslint-disable-line

app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

app.use(express.static(path.join(__dirname, '/src')))

app.get('/', (request, response) => {
  response.render('pages/index')
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
