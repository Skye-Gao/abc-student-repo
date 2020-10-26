// https://developer.chrome.com/extensions/messaging

let button = document.getElementById("increaseButton");
let value=document.getElementById("currentValue");
let currentValue = 0;


chrome.runtime.sendMessage({type:"getCurrentValue"}, function(response){
  console.log("response is ", response);
  currentValue=response.value;
  value.innerHTML=currentValue;
});

// when the button in the popup window is clicked...
button.addEventListener("click", ()=>{
  currentValue+=1;
  value.innerHTML=currentValue;
  chrome.runtime.sendMessage({type:"increaseValue"});
})
