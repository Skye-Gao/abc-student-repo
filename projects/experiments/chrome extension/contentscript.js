console.log("I am on this website!");

function replace(word1, word2){
  let regEx=new RegExp(word1,"g");
  document.body.innerHTML=document.body.innerHTML.replace(regEx, word2);
}

replace("Moon", "Potato");


function gotMessage(request, sender,sendResponse){
  console.log(request);
  replace(message.word1, message.word2);
}

chrome.runTime.onMessage.addListener(gotMessage);
