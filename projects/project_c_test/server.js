let express=require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

// let connected_user = 0;
let cursors = {};
let cursorsDead= {};
let cursorsBurried= {};

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  let id = socket.id;
  cursors[id] = {}; //add object for newly connnect cursor
  // statuses : "alive" , "dead", "burried"
  cursors[id].status = "alive"; //add a key-value pair to that object
  io.emit("user_is_on");
  cursors[id].buttonClicks = [];
  cursors[id].checkboxChecks = [];
  cursors[id].gravePos = {x:undefined, y:undefined}
  console.log('-------------------------------------');
  console.log('a user connected');
  console.log("cursors", cursors);
  console.log("cursorsDead", cursorsDead);
  console.log("cursorsBurried", cursorsBurried);
  console.log('-------------------------------------');

  socket.on("name", (data)=>{
    cursors[id].name = data;
  })

  socket.on("button", (data)=>{
    cursors[id].buttonClicks.push(data);
    // console.log(data)
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');    // console.log("the clicks are", cursors[id].buttonClicks)
    // io.emit("incoming", data);
  })

  socket.on("check", (data)=>{
    cursors[id].checkboxChecks.push(data);
    console.log(data)
    console.log(cursors);
    // io.emit("incoming", data);
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected');
    io.emit("user_status","disconnected");
    delete cursors[id];
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

  socket.on('dead', () => {
    console.log('user died');
    cursors[id].status = "dead";
    io.emit("user_status",cursors[id].status);
    cursorsDead[id] = cursors[id];
    delete cursors[id];
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

  socket.on('burried', (data) => {
    cursorsDead[id].gravePos.x=data.posX;
    cursorsDead[id].gravePos.y=data.posY;
    console.log('a user burried');
    cursorsDead[id].status = "burried";
    cursorsBurried[id] = cursorsDead[id];
    delete cursorsDead[id];
    io.emit("user_record",cursorsBurried);
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
