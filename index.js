const app = require('express')();
const server = require('http').Server(app) //run the server on app
const io = require('socket.io')(server); //run our server on socket.io

const port = 3000;

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/public/index.html')
});

app.get('/phyton', (req, res)=> {
  res.sendFile(__dirname + '/public/phyton.html')
});

app.get('/javascript', (req, res)=> {
  res.sendFile(__dirname + '/public/javascript.html')
});

app.get('/swift', (req, res)=> {
  res.sendFile(__dirname + '/public/swift.html')
});

server.listen(port, ()=> {
  console.log(`Server is listening on Port: ${port}`)
});
