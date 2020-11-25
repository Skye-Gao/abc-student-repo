let express=require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let connected_user = 0;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  connected_user += 1;
  io.emit("number_of_user",connected_user);
  console.log('a user connected',socket.id);
  console.log("connected_user: ",connected_user)

  socket.on('disconnect', () => {
    connected_user -= 1;
    // io.emit("user_left",connected_user);
    io.emit("number_of_user",connected_user);
    console.log('user disconnected', socket.id);
    console.log("connected_user_left: ", connected_user)
  });

  socket.on("message", (data)=>{
    console.log(data)
    io.emit("incoming", data);

  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
