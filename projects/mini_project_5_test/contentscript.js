chrome.runtime.onMessage.addListener(gotMessage);

// chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
//   switch(message.type) {
//     case "colors-div":
//     console.log("chengColor!")
//     console.log("color!")
//     //
//     document.body.style.backgroundColor = message.color;
//
//     let divs = document.getElementsByTagName("div");
//     for(div of divs)
//     {
//       div.style['background-color'] = message.color;
//     }
//
//     // var divs = document.querySelectorAll("div");
//     // if(divs.length === 0) {
//     //     alert("There are no any divs in the page.");
//     // } else {
//     //     for(var i=0; i&lt;divs.length; i++) {
//     //         divs[i].style.backgroundColor = message.color;
//     //     }
//     // }
//
//   }
// });

function gotMessage(message,sender,sendresponse)
{
  console.log(message.txt);
  console.log("color!")
  //
  document.body.style.backgroundColor = "#f7ede2";

  let divs = document.getElementsByTagName("div");
  for(div of divs)
  {
    div.style['background-color'] = '#f7ede2';
  }
}
