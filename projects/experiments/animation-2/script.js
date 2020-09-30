let button=document.getElementById("button");
let box=document.getElementById("box");
let boxAngle=0;
let buttonAngle=0;

button.addEventListener("click",()=>{
  boxAngle=boxAngle+360;
  box.style.transform="rotate("+boxAngle+"deg)";
})

box.addEventListener("click",()=>{
  buttonAngle=buttonAngle+360;
  button.style.transform="rotate("+buttonAngle+"deg)";
})
