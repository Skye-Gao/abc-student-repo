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
  // io.emit("user_burried",id,cursorsBurried);
  cursors[id] = {}; //add object for newly connnect cursor
  // statuses : "alive" , "dead", "burried"
  cursors[id].status = "alive"; //add a key-value pair to that object
  socket.emit("user_status",cursors[id].status)

  // cursors[id].buttonClicks = [];
  // cursors[id].checkboxChecks = [];
  cursors[id].actions = [];
  cursors[id].livePos = {};
  cursors[id].gravePos = {x:undefined, y:undefined}
  console.log('-------------------------------------');
  console.log('a user connected');
  console.log("cursors", cursors);
  console.log("cursorsDead", cursorsDead);
  console.log("cursorsBurried", cursorsBurried);
  console.log('-------------------------------------');

  socket.on("name", (data)=>{
    cursors[id].name = data;
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  })

  socket.on("live_pos", (data)=>{
    if (cursors[id].status == "alive"){
      cursors[id].livePos = data;
    }else if (cursors[id].status == "burried"){
      cursors[id].livePos = {};
    }

    cursors[id].livePos = data;
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  })

  socket.on("button", (data)=>{
    cursors[id].actions.push(data);
    // console.log(data)
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');    // console.log("the clicks are", cursors[id].buttonClicks)
    // io.emit("incoming", data);
  })

  socket.on("check", (data)=>{
    cursors[id].actions.push(data);
    // console.log(data)
    console.log(cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
    // io.emit("incoming", data);
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected');
    // io.emit("user_status","disconnected");
    delete cursors[id];
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

  socket.on('dead', () => {
    console.log('user died');
    // cursors[id].status = "dead";
    // socket.emit("user_dead",cursors[id].status);
    // cursorsDead[id] = cursors[id];
    // delete cursors[id];
    socket.emit("graveyardData",cursorsBurried)
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

  // socket.on('burried', (data) => {
  //   cursorsDead[id].gravePos.x=data.posX;
  //   cursorsDead[id].gravePos.y=data.posY;
  //   console.log('a user burried');
  //   cursorsDead[id].status = "burried";
  //   cursorsBurried[id] = cursorsDead[id];
  //   delete cursorsDead[id];
  //   io.emit("user_burried",cursorsBurried[id]);
  //   console.log("cursors", cursors);
  //   console.log("cursorsDead", cursorsDead);
  //   console.log("cursorsBurried", cursorsBurried);
  //   console.log('-------------------------------------');
  // });

  // });

  socket.on('burried', (data) => {
    cursors[id].gravePos.x=data.posX;
    cursors[id].gravePos.y=data.posY;
    console.log('a user burried');
    cursors[id].status = "burried";
    cursorsBurried[id] = cursors[id];
    delete cursors[id];
    io.emit("user_burried",id,cursorsBurried);
    socket.emit("user_status",cursorsBurried[id].status)
    console.log("cursors", cursors);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });
});


// socket.on('burried', () => {
//   // cursorsDead[id].gravePos.x=data.posX;
//   // cursorsDead[id].gravePos.y=data.posY;
//   console.log('a user burried');
//   cursorsDead[id].status = "burried";
//   cursorsBurried[id] = cursorsDead[id];
//   delete cursorsDead[id];
//   io.emit("user_burried",cursorsBurried);
//   console.log("cursors", cursors);
//   console.log("cursorsDead", cursorsDead);
//   console.log("cursorsBurried", cursorsBurried);
//   console.log('-------------------------------------');
// });

// });

http.listen(3000, () => {
  console.log('listening on *:3000');
});
