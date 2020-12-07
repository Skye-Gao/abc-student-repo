let socket = io();

let start= document.getElementById("start");
let name_input= document.getElementById("name");
let pro_noun_input= document.getElementById("pro_noun");

let button=document.getElementById("button");
button.style.position = "absolute";
button.style.left = 300 + 'px';
button.style.top = 590 + 'px';
let checkbox=document.getElementById("check");
checkbox.style.position = "absolute";
checkbox.style.left = 200 + 'px';
checkbox.style.top = 320 + 'px';

let birth=document.getElementById("birth");
let life=document.getElementById("life");
let cursorContainer=document.getElementById("cursorContainer");
let transition=document.getElementById("transition");
let graveyard=document.getElementById("graveyard");
let goToGraveyard=document.getElementById("goToGraveyard");

let freezeClic = false;
document.addEventListener("click", freezeClicFn, true);

/* Function to disable cursor clicks */
function freezeClicFn(e) {
  if (freezeClic==true) {
    e.stopPropagation();
    e.preventDefault();
    console.log("freezed!");
  }
}

//show alive cursors
function renderCursor(id,x,y){
  let cursor = document.createElement('div');
  cursor.id = id+"-cursor";
  cursor.className="other_cursors";
  cursor.style.left=x+"px";
  cursor.style.top=y+"px";
  cursorContainer.appendChild(cursor);
}

//show cursors_archive
function cursorArchive(id,graveX,graveY,actions,name,pronoun){
  let grave = document.createElement('div');
  let graveImg=document.createElement('img');
  let death_anounce=document.createElement('div');
  let user_records=document.createElement('div');
  let user_name=document.createElement('p');

  console.log(pronoun);

  grave.style.position = "absolute";
  grave.style.height="60px";
  grave.style.width="200px";
  grave.style.left = graveX+"px";
  grave.style.top = graveY+"px";
  graveImg.src="cursor_gravestone.png";
  graveImg.style.maxHeight="100%";
  graveImg.id=id;
  user_name.innerHTML="This is "+name+"'s grave";

  graveyard.appendChild(grave);
  grave.appendChild(graveImg);
  grave.appendChild(death_anounce);
  grave.appendChild(user_records);
  // console.log(actions);
  //hover see other's records
  graveImg.addEventListener("mouseover", ()=>{
    user_records.appendChild(user_name);
    // document.body.style.backgroundColor = "red";
    for (let i=0;i<actions.length;i++){
      let records=document.createElement('p');
      user_records.appendChild(records);
      records.innerHTML= pronoun+" "+actions[i].message+" at "+actions[i].time;
    }
  });

  graveImg.addEventListener("mouseout", ()=>{
    // document.body.style.backgroundColor = "white";
    user_records.innerHTML="";
  });
}

//show new grave
function newGrave(graveX,graveY){
  let grave = document.createElement('div');
  let graveImg=document.createElement('img');
  let death_anounce=document.createElement('div');
  let user_records=document.createElement('div');
  let recordsOne=document.createElement('p');
  let recordsTwo=document.createElement('p')

  grave.style.position = "absolute";
  grave.style.height="60px";
  grave.style.width="200px";
  grave.style.left = graveX+"px";
  grave.style.top = graveY+"px";
  graveImg.src="cursor_gravestone.png";
  graveImg.style.maxHeight="100%";

  graveyard.appendChild(grave);
  grave.appendChild(graveImg);
  grave.appendChild(death_anounce);
  grave.appendChild(user_records);
  user_records.appendChild(recordsOne);
  user_records.appendChild(recordsTwo);

  graveImg.addEventListener("mouseover", ()=>{
    // document.body.style.backgroundColor = "blue";
    recordsOne.innerHTML="This is your grave ⚰️."
    recordsTwo.innerHTML=" Please rest in peace."
  });

  graveImg.addEventListener("mouseout", ()=>{
    // document.body.style.backgroundColor = "white";
    recordsOne.innerHTML="";
    recordsTwo.innerHTML="";
  });

}

//start page
start.addEventListener("click", ()=>{
  console.log("sent");
  let name = name_input.value.trim();
  let pro_noun=pro_noun_input.value.trim();

  // send name and pronoun to server
  if(name != "" && pro_noun != "" ){
    let data = {}
    data.name=name;
    data.pro_noun=pro_noun;
    socket.emit('user_info', data);
    console.log(data);
  }
  //show life page
  life.style.display="block";
  birth.style.display="none";

  //times up, send "dead" message, show "transition" div
  let lifetime = 0;
  let totalYears = 10
  let lifeclock = setInterval(()=>{
    lifetime+=1;
    document.getElementById("clock").innerHTML = totalYears- lifetime;
    if(lifetime>=totalYears){
      life.style.display="none";
      transition.style.display="block";
      clearInterval(lifeclock);
      //event listener for actions in "transition" and send
      goToGraveyard.addEventListener("click", ()=>{
        // tell server i am dead, so that server can send me the burried_archive data
        socket.emit('dead');
        transition.style.display="none";
        graveyard.style.display="block";
      })
    }
  }, 1000)
});

// //prompt listener to get user name
// let name = prompt("Welcome to the world, new born! Here you will live your life a cursor. Please enter your name", "Cursor M");
// if (name != null) {
//   socket.emit('name',name);
//   console.log(name);
// }

//event listenser for button/clicks etc.
button.addEventListener("click", ()=>{
  console.log("click button");
  let msg="clicked a button";
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let currentTime = date+' '+time;
  socket.emit('button', {message: msg, time: currentTime});
});

checkbox.addEventListener("click", ()=>{
  console.log("click checkbox");
  let msg="checked a checkbox";

  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let currentTime = date+' '+time;

  socket.emit('check', {message: msg, time: currentTime});
});

//socket.on("burried_archive"): show all the exsitnig graves
socket.on("burried-archive",(graves)=>{
  // console.log(id);
  let graveIDs=Object.keys(graves);
  // console.log(graveIDs);
  for (let i=0;i<graveIDs.length;i++){
    let id=graveIDs[i];
    let graveX=graves[id].gravePos.x;
    let graveY=graves[id].gravePos.y;
    let actions=graves[id].actions;
    let name=graves[id].name;
    let pronoun=graves[id].pronoun;
    console.log(pronoun);
    cursorArchive(id,graveX,graveY,actions,name,pronoun);
  }

} )

//event listener for picking grave position and send
graveyard.addEventListener("click", ()=>{
  freezeClic = true;
  let id="me";
  // document.body.style.cursor = "none";
  let cursorX=event.clientX;
  let cursorY=event.clientY;
  let actions="none";
  newGrave(cursorX,cursorY);
  socket.emit('burried', {posX: cursorX, posY: cursorY});
  // socket.emit('burried');
  // console.log('burried');
  console.log(cursorX,cursorY)
})


//event listener for mouse movemnet in "life" and send --later
function sendMousePosition(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  console.log(coor);
  socket.emit('live_pos', {xPos: x, yPos: y});
}

life.addEventListener("mousemove", sendMousePosition);

// show other's live cursor
socket.on("others_alive",(alives)=>{
  cursorContainer.innerHTML='';
  let aliveIDs=Object.keys(alives);
  // console.log(aliveIDs);
  for (let i=0;i<aliveIDs.length;i++){
    let id=aliveIDs[i];
    let aliveX=alives[id].livePos.xPos;
    let aliveY=alives[id].livePos.yPos;
    renderCursor(id,aliveX,aliveY);
  }
  // console.log(data);
});

//socket.on("socket_burried") -- optional: show newly added graves
socket.on("user_burried", (id,data)=>{
  console.log(id);
  console.log(data[id]);

  let newGraveX=data[id].gravePos.x;
  let newGraveY=data[id].gravePos.y;
  let actions=data[id].actions;
  let name=data[id].name;
  let pronoun=data[id].pronoun;

  cursorArchive(id,newGraveX,newGraveY,actions,name,pronoun);
});
