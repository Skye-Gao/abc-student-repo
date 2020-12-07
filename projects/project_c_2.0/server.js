let express=require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

// let connected_user = 0;
let cursorsAlive = {};
let cursorsDead= {};
let cursorsBurried= {};

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//open page, user added to alive {}
io.on('connection', (socket) => {
  let id = socket.id;

  //delet client when they disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected');
    // io.emit("user_status","disconnected");
    delete cursorsAlive[id];
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

  //------------------------life------------------------
  //add object for newly connnect cursor & add a key-value pairs to that object
  cursorsAlive[id] = {};
  cursorsAlive[id].status = "alive";
  cursorsAlive[id].actions = [];
  cursorsAlive[id].livePos = {};
  cursorsAlive[id].gravePos = {x:undefined, y:undefined}

  //receive user name to client value in alive{}
  socket.on("user_info", (data)=>{
    cursorsAlive[id].name = data.name;
    cursorsAlive[id].pronoun = data.pro_noun;
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  })

  //receive user life actions from button/clicks etc. to alive {}
  socket.on("button", (data)=>{
    cursorsAlive[id].actions.push(data);
    // console.log(data)
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  })

  socket.on("check", (data)=>{
    cursorsAlive[id].actions.push(data);
    // console.log(data)
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  })

  //receive live positions
  socket.on("live_pos", (data)=>{
    cursorsAlive[id].livePos = data;
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  })

  //------------------------dead--------------------------
  //receive "dead" messages, client moved to dead{}
  //socket.emit("burried-archive", burried)
  socket.on('dead', () => {
    console.log('user died');
    cursorsAlive[id].status = "dead";
    // socket.emit("user_dead",cursors[id].status);
    cursorsDead[id] = cursorsAlive[id];
    delete cursorsAlive[id];
    socket.emit("burried-archive",cursorsBurried)
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });

  //----------------------burried-------------------------
  //receive grave position to dead{}
  //client moved to burried{}
  socket.on('burried', (data) => {
    cursorsDead[id].gravePos.x=data.posX;
    cursorsDead[id].gravePos.y=data.posY;
    console.log('a user burried');
    cursorsDead[id].status = "burried";
    cursorsBurried[id] = cursorsDead[id];
    delete cursorsDead[id];
    socket.broadcast.emit("user_burried",id,cursorsBurried);
    socket.emit("user_status",cursorsBurried[id].status)
    console.log("cursors", cursorsAlive);
    console.log("cursorsDead", cursorsDead);
    console.log("cursorsBurried", cursorsBurried);
    console.log('-------------------------------------');
  });
});

//movement data every ms only to alive cursors
let sendMovement=setInterval(()=>{
  // console.log("lives");
  let liveIDs=Object.keys(cursorsAlive);
  for(let i=0;i<liveIDs.length;i++){
    let id=liveIDs[i];
    // console.log(id);
    io.to(id).emit("others_alive",cursorsAlive);
  }

},50);




//send THIS record to both dead{} and burried{}--optional

http.listen(3000, () => {
  console.log('listening on *:3000');
});
