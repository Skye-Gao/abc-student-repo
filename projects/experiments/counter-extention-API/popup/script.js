// let findWord = document.getElementById("findword");
let num = document.getElementById("number");
let button = document.getElementById("button");
let currentValue = 0;


chrome.runtime.sendMessage({type:"getCurrentValue"}, function(response) {
  console.log("response is",response);
  currentValue = response.value;
  num.innerHTML = currentValue;
});

// when the button in the popup window is clicked...
button.addEventListener("click", ()=>{
  currentValue = currentValue + 1;
  console.log(currentValue);
  num.innerHTML = currentValue;
  // })

  chrome.runtime.sendMessage({type:"increasedValue"});
})
