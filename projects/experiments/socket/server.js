var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  //send direc messages
  // res.send('');
  //send local file
  res.sendFile(__dirname+'/index.html');
});

//eventlisterner by browser
//requested by browsers
io.on('connection', (socket) => {
  // console.log('a user connected', socket);
  console.log('user id', socket.id);
  console.log("--------------")
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
