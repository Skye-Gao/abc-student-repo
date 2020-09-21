let range=document.getElementById("myRange");
let valueField=document.getElementById("myValue");
console.log("range",range);

function changeHappened(){
  console.log("what's change?");
  valueField.innerHTML=range.value;
}

range.addEventListener("change",changeHappened);

function inputHappened(){
  console.log("what's input");
  valueField.innerHTML=range.value;
  valueField.style.marginLeft=range.value*10+"px";
}

range.addEventListener("input",inputHappened);
