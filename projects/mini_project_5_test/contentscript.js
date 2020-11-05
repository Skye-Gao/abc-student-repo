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

// Make a request for a user with a given ID
function getSimilarWord(inputWord, callback){
  let url = "https://api.datamuse.com/words?sp="+inputWord
  axios.get(url)
    .then(function (response) {
      // handle success
      callback(response);
      // return response
    })
    .catch(function (error) {
      // handle error
      callback(error);
      // return error
    })
}


getSimilarWord("elephant", (similarwords)=>{
  console.log("hello", similarwords)
});
