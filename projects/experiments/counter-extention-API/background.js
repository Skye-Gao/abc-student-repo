console.log("it's working!");

let currentValue = 0;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(message);
    if(message.type == "getCurrentValue"){
      sendResponse({type:"currentValue",value:currentValue})
    }else if (message.type == "increasedValue"){
        currentValue = currentValue + 1;
    }
  });
