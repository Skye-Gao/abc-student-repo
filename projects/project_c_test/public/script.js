let button=document.getElementById("button");
button.style.position = "absolute";
button.style.left = 300 + 'px';
button.style.top = 590 + 'px';
let checkbox=document.getElementById("check");
checkbox.style.position = "absolute";
checkbox.style.left = 200 + 'px';
checkbox.style.top = 320 + 'px';

let grave = document.createElement('div');
grave.id="grave";
grave.style.position = "absolute";
grave.style.height="20px";
grave.style.width="20px";
let graveImg=document.createElement('img');
graveImg.src="cursor_dead.png";
graveImg.id="graveImg";
let user_record=document.createElement('div');
user_record.id="user_record";
user_record.style.wdith="100px";

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

// setTimeout(()=>{
//   socket.emit('dead');
//
// }, 20000)

let lifetime = 0;
let lifeclock = setInterval(()=>{
  lifetime+=1;
  document.getElementById("clock").innerHTML = 25- lifetime;
  if(lifetime>=25){
    clearInterval(lifeclock);
    socket.emit('dead');
  }
}, 1000)

socket.on("user_status", (data)=>{
  console.log(data);
  if (data="dead"){
    if (confirm("You have lived a wonderful life. Click the ground to choose your graveyard location!")) {
      document.addEventListener("click", ()=>{
        freezeClic = true;
        document.body.style.cursor = "none";
        let cursorX=event.clientX;
        let cursorY=event.clientY;

        document.body.appendChild(grave);
        grave.style.left = cursorX + 'px';
        grave.style.top = cursorY + 'px';
        grave.appendChild(graveImg);
        grave.appendChild(user_record);
        document.getElementById("user_record").innerHTML="This is your grave. Please rest in peace";

        socket.emit('burried', {posX: cursorX, posY: cursorY});
        console.log(cursorX,cursorY)
      });
      console.log("Choose your gravPos!");
    } else {
      console.log( "You pressed Cancel!");
    }
  }else {
    console.log("just left");
  }
})

socket.on("user_record", (data)=>{
  console.log(data);
// document.getElementById("user_record").innerHTML=data.name;
  // document.getElementById("graveImg").addEventListener("mouseover", ()=>{
  //     document.body.style.backgroundColor = "red";
});





let name = prompt("Welcome to the world, new born! Here you will live your life a cursor. Please enter your name", "Cursor M");
if (name != null) {
  socket.emit('name',name);
  console.log(name);
}
