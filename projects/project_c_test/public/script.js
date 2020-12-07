let button=document.getElementById("button");
button.style.position = "absolute";
button.style.left = 300 + 'px';
button.style.top = 590 + 'px';
let checkbox=document.getElementById("check");
checkbox.style.position = "absolute";
checkbox.style.left = 200 + 'px';
checkbox.style.top = 320 + 'px';

let burriedCursors=[];

// window.onunload = confirmExit();
// function confirmExit(){
//   alert("Hello! I am an alert box!!");
// }

var socket = io();
console.log("hi");

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



/* Function to add class name to hide cursor element */
function GFG_Fun() {
  document.getElementById('body').classList.add("newClass");
  console.log("Cursor is removed from body!");
}

let name = prompt("Welcome to the world, new born! Here you will live your life a cursor. Please enter your name", "Cursor M");
if (name != null) {
  socket.emit('name',name);
  console.log(name);
}

button.addEventListener("click", ()=>{
  console.log("click button");
  let msg="i clicked";
  let currentTime = new Date();
  // send name and message to server
  socket.emit('button', {message: msg, time: currentTime});
  //console.log(data);
});

checkbox.addEventListener("click", ()=>{
  console.log("click checkbox");
  let msg="i checked";
  let currentTime = new Date();
  // send name and message to server
  socket.emit('check', {message: msg, time: currentTime});
  //console.log(data);
});


function sendMousePosition(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  console.log(coor);
  socket.emit('live_pos', {xPos: x, yPos: y});
}

socket.on("user_status", (data)=>{
  console.log(data);
  if (data=="alive"){
    document.body.addEventListener("mousemove", sendMousePosition);

  }else{

  }
});

let lifetime = 0;
let totalYears = 10
let lifeclock = setInterval(()=>{
  lifetime+=1;
  document.getElementById("clock").innerHTML = totalYears- lifetime;
  if(lifetime>=totalYears){

    document.body.removeEventListener("mousemove", sendMousePosition);

    clearInterval(lifeclock);

    if (confirm("You have lived a wonderful life. Click the ground to choose your graveyard location!")) {

      // tell server i am dead, so that server can send me the graveyard data
      socket.emit('dead');




      document.addEventListener("click", ()=>{
        freezeClic = true;
        // document.body.style.cursor = "none";
        let cursorX=event.clientX;
        let cursorY=event.clientY;
        socket.emit('burried', {posX: cursorX, posY: cursorY});
        // socket.emit('burried');
        console.log('burried');
        console.log(cursorX,cursorY)
      })


      console.log("Choose your gravPos!");
    } else {
      console.log( "You pressed Cancel!");
    }


  }
}, 1000)

// socket.on("user_dead", (data)=>{
//   console.log(data);
//     if (confirm("You have lived a wonderful life. Click the ground to choose your graveyard location!")) {
//       document.addEventListener("click", ()=>{
//         freezeClic = true;
//         // document.body.style.cursor = "none";
//         let cursorX=event.clientX;
//         let cursorY=event.clientY;
//         socket.emit('burried', {posX: cursorX, posY: cursorY});
//         // socket.emit('burried');
//         console.log('burried');
//
//         console.log(cursorX,cursorY)
//
//         document.body.appendChild(grave);
//         grave.style.left = cursorX + 'px';
//         grave.style.top = cursorY + 'px';
//         grave.appendChild(graveImg);
//         grave.appendChild(user_record);
//         document.getElementById("user_record").innerHTML="This is your grave. Please rest in peace";
//
//       });
//       console.log("Choose your gravPos!");
//     } else {
//       console.log( "You pressed Cancel!");
//     }
// })

socket.on("graveyardData",(data)=>{
console.log(data);

} )


socket.on("user_burried", (id,data)=>{
  console.log(id);
  console.log(data[id]);

  let grave = document.createElement('div');
  let graveImg=document.createElement('img');
  let death_anounce=document.createElement('div');
  let user_records=document.createElement('div');
  let actions=document.createElement('p')
  // grave.id="grave";
  grave.style.position = "absolute";
  grave.style.height="20px";
  grave.style.width="200px";
  grave.style.left = data[id].gravePos.x+'px';
  grave.style.top = data[id].gravePos.y+'px';
  graveImg.src="cursor_dead.png";

  // graveImg.style.maxWidth="100%";
  graveImg.style.maxHeight="100%";
  // graveImg.id="graveImg";
  // user_record.id="user_record";
  death_anounce.style.wdith="100px";
  death_anounce.innerHTML="This is your grave ⚰️. Please rest in peace.";

  document.body.appendChild(grave);
  grave.appendChild(graveImg);
  grave.appendChild(death_anounce);
  grave.appendChild(user_records);
  user_records.appendChild(actions)

  for (let i=0;i<data[id].actions.length;i++){
    actions.innerHTML= data[id].actions[i].message+" "+data[id].actions[i].time;
    // user_record.innerHTML+= data[id].checkboxChecks[i].time;
  }

  // console.log(data[id].actions[0].message);
  console.log(data);
  // document.getElementById("user_record").innerHTML=data.name;
  // graveImg.addEventListener("mouseover", ()=>{
  //   document.body.style.backgroundColor = "red";
  // });
});
