const server = require('./config/server')()

server.then(() => 
  console.log('server on listen in:', 3000)
).catch((err) => {
  console.err('error in server: ', err)
})
