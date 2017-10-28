const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 8080)

app.use(express.static(path.join(__dirname, '/dist')))

app.get('/', (request, response) => {
    response.render('index.html')
})

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'))
})
