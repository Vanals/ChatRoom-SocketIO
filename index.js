const app = require('express')();
const server = require('http').Server(app) //run the server on app
const io = require('socket.io')(server); //run our server on socket.io

const port = 3000;

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/public/index.html')
})

server.listen(port, ()=> {
  console.log(`Server is listening on Port: ${port}`)
})
