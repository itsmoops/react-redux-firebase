const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

app.use(express.static(path.join(__dirname, '/dist')))

app.get('/', (request, response) => {
  response.send('App is running')
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
