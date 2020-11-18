console.log("it works");

let button= document.getElementById("button");
let secrectInput=document.getElementById("secret");

button.addEventListener("click",()=>{
  console.log("click");
  let secret=secrectInput.value;
  console.log("secret:", secret);
  window.location.href="/secret?word="+secret;
})
