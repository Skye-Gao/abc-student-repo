console.log("it works");

let button= document.getElementById("button");
let input=document.getElementById("answer");
let riddle=document.getElementById("riddle");


l = ["❤️+📝","🐝+➡️+🔙", "🔍+🐠 (HINT:GUESS A MOVIE)", "🚷 (HINT:GUESS A COUNTRY)","📹+📎"];
let i = Math.floor(5*Math.random());
riddle.innerHTML = l[i];

button.addEventListener("click",()=>{
  console.log("click");
  let answer=input.value;
  console.log("answer:", answer);
  window.location.href = "/answer?word=" + answer;
})
