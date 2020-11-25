console.log("hi");

let elevator=document.getElementById("elevator");
let warning=document.getElementById("warning");

let pplOne=document.getElementById("one");
let pplTwo=document.getElementById("two");
let pplThree=document.getElementById("three");
let pplFour=document.getElementById("four");
let pplFive=document.getElementById("five");

let message=document.getElementsByClassName("message")
let sendButton = document.getElementById("button");
let answer=document.getElementById("answer");

let mOne=document.getElementById("mOne");
let mTwo=document.getElementById("mTwo");
let mThree=document.getElementById("mThree");
let mFour=document.getElementById("mFour");
let mFive=document.getElementById("mFive");

let array=[pplOne,pplTwo,pplThree,pplFour,pplFive]
let msgArray=[mOne,mTwo, mThree, mFour, mFive];

for (let v=0;v<5;v++){
  let randomPercentage=Math.floor(Math.random() * 20)*4 + '%' ;
  array[v].style.left=randomPercentage;
}

let socket = io();

socket.on("number_of_user", (data)=>{
  if (data>4) {
    warning.style.visibility="visible";
    document.body.style.backgroundColor = "red";
    elevator.style.backgroundColor = "red";
    array[4].style.visibility = "visible";
    document.getElementById("note").style.display = "none";

    setTimeout(function(){
      document.getElementById("mOne").innerHTML = "?";
      document.getElementById("mTwo").innerHTML = "...";
      document.getElementById("mThree").innerHTML = "...";
      document.getElementById("mFour").innerHTML = "?";
      document.getElementById("mFive").innerHTML = "...";
    }, 3000);

    setTimeout(function(){
      document.getElementById("mThree").innerHTML = "Who should leave?";
      document.getElementById("mThree").style.fontSize="12px";
    }, 5000);

  }else{

    document.getElementById("mOne").innerHTML = "";
    document.getElementById("mTwo").innerHTML = "";
    document.getElementById("mThree").innerHTML = "";
    document.getElementById("mFour").innerHTML = "";
    document.getElementById("mFive").innerHTML = "";

    document.body.style.backgroundColor = "white";
    elevator.style.backgroundColor = "white";
    warning.style.visibility="hidden";

    for(let i=4; i>data-1;i--){
      array[i].style.visibility = "hidden";
    }
    for(let j=0; j<data;j++){
      array[j].style.visibility = "visible";
    }
  }
  console.log("number of user connected:",data);
})


sendButton.addEventListener("click", ()=>{
  console.log("sent");
  let msg = answer.value.trim();
  if(msg != ""){
    // send name and message to server
    let data = {message: msg}
    socket.emit('message', data);
    //console.log(data);
  }
  answer.value = "";
})

answer.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

socket.on("incoming", (data)=>{
  let received_message = data.message;
  let speak=Math.floor(Math.random() * 4);
  msgArray[speak].innerHTML=received_message;
  msgArray[speak].style.fontSize="12px";

})
