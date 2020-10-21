// // make sure the script is injected
// // for this we must adjust the manifest.json file:
// // manifest.json line 6-8:
// //      1) ask for permission: to access the activeTab
// // manifest.json line 9-14:
// //      2) define "matches": which urls should this script be injected to? https://developer.chrome.com/extensions/match_patterns
// //      3) name the script ("contentscript.js") so manifest.json knows where to find it
// //
//
//
// function repl(find, replace){
//   // info on the regular expression here: https://www.designcise.com/web/tutorial/how-to-replace-all-occurrences-of-a-word-in-a-javascript-string
//   var finder = new RegExp(find,"g");
//   // we replace the entire website's content with itself, but replace every occurence of
//   // the word that "finder" carries with the word that "replace" carries
//   // e.g. repl("Moon", "Potato")
//   document.body.innerHTML = document.body.innerHTML.replace(finder, replace);
// }
//
//
// // funtion to execute when any message arrives
// function gotMessage(request, sender, sendResponse){
//   // request includes the actual message
//   console.log(request);
//
//   // use our replacement function to replace words as instructed by the popup page
//   repl(request.find, request.replace)
//
//   // sender lets us know who the message is fro (ie from our popup page)
//   // sendResponse is a function and allows us to reply to the sender (our popup page)
//   // sendResponse({message: "successfully replaced words!"});
//
// }
//
//
//
//
// // listening for messages:
// chrome.runtime.onMessage.addListener(gotMessage);
// // more on messaging: https://developer.chrome.com/extensions/messaging

// var div = document.createElement('div');
//
// div.innerHTML = document.body.innerHTML;
//
// document.body.appendChild(div);
//
// window.onscroll = function () {
//   scrollRotate();
// };
//
// function scrollRotate() {
//   console.log("scrolled!");
//   console.log(window.pageYOffset);
//   // let image = document.getElementById("reload");
//   document.body.style.transform = "rotate(" + Number(window.pageYOffset)*(5) + "deg)";
//   document.body.style.border="1px solid #4CAF50";
//   // document.body.style.transformOrigin="window.innerHeight/2 window.innerWidth/2";
// }

var div = document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');

div.innerHTML = document.body.innerHTML;
div2.innerHTML = document.body.innerHTML;
div3.innerHTML = document.body.innerHTML;
div.id="old";
div2.id="new";
div3.id="new2";

document.body.innerHTML = "";

document.body.appendChild(div);
document.body.appendChild(div2);
document.body.appendChild(div3);

document.getElementById("new").style.transform="translate(-50% -50%)";

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
  console.log(window.pageYOffset);
    // let image = document.getElementById("reload");
    // document.body.style.transform = "rotate(" + Number(window.pageYOffset/10)*(-1) + "deg)";
    document.getElementById("old").style.transform="rotate(" + Number(window.pageYOffset/10*(-1)) + "deg)";
    document.getElementById("new").style.transform="rotate(" + Number(window.pageYOffset/5) + "deg)";
    document.getElementById("new2").style.transform="rotate(" + Number(window.pageYOffset/8*(-1)) + "deg)";
    // document.getElementById("old").style.transformOrigin="center";
    // document.getElementById("new").style.transformOrigin="top center";

}
