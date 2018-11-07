const server = require('./config/server')()
console.log(server)
server.then((server) => 
  console.log('server on listen in:', 3000)
)
