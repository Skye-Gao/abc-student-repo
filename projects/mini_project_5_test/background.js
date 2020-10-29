console.log("Background running");

// // listening for an event / one-time requests
// // coming from the popup
// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   switch(request.type) {
//     case "color-One":
//     colorOne();
//     case "color-Two":
//     colorTwo();
//     case "color-Three":
//     colorThree();
//   }
// });
//
// // send a message to the content script
// var colorOne = function() {
//   chrome.tabs.getSelected(null, function(tab){
//     chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#f1faee"});
//     // setting a badge
//     chrome.browserAction.setBadgeText({text: "bright!"});
//   })
// }
//
// var colorTwo = function() {
//   chrome.tabs.getSelected(null, function(tab){
//     chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#f7ede2"});
//     // setting a badge
//     chrome.browserAction.setBadgeText({text: "neutral!"});
//   })
// }
//
// var colorThree = function() {
//   chrome.tabs.getSelected(null, function(tab){
//     chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#edf6f9"});
//     // setting a badge
//     chrome.browserAction.setBadgeText({text: "dark!"});
//   })
// }



// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message == "output") {
//
//        var win = window.open('https://www.google.ca/webhp?hl=en&sa=X&ved=0ahUKEwjesaKd26TcAhWNw4MKHcN-CwgQPAgD', '_blank');
//        win.focus();
//     }
// });



chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		txt : "Hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}



////---------------------class-code---------------------------
// console.log("it's working!");
//
// let currentValue = 0;
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   console.log(message);
//   if(message.type == "getCurrentValue"){
//     sendResponse({type:"currentValue",value:currentValue})
//   }else if (message.type == "increasedValue"){
//     currentValue = currentValue + 1;
//   }
// });
