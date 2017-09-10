const http = require('http')

const port = process.env.PORT || 8000

http.createServer(() => {}).listen(port)

console.log(`Server running at http://127.0.0.1:${port}/`)
