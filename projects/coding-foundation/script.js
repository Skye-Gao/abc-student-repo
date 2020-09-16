var images = ['images/sun.png', 'images/cloud.png', 'images/cloudy.png', 'images/rain.png', 'images/storm.png'];

function changeShapeNum(){
  var n = document.getElementById("number");
  var inputVal = n.value;
//add images according to the input number
  for (var i = 0; i < inputVal; i++){
    var num = Math.floor(Math.random() * (images.length));
    var x = document.createElement("IMG");
    x.setAttribute("src", images[num]);
    x.setAttribute("width", "25px");
    x.setAttribute("height", "25px");
    x.setAttribute("hspace", "15px");
    document.getElementById('container').appendChild(x);
  }
}

//Cannot figure out the "enter" key input
// document.getElementById("number")
// .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("myButton").click();
//     }
// });

//---------------This is the original version with shapes----------------
//set colors
// var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];

// //adding shapes
// function changeShapeNum(){
//   var n = document.getElementById("number");
//   var defaultVal=n.defaultValue;
//   var inputVal = n.value;
// //add shapes according to the input number
//   for (var i = 0; i < inputVal; i++){
//     var x = document.createElement("div");
//     x.setAttribute("class", "shape");
//     x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];//assign random colors
//     document.getElementById('container').appendChild(x);
//   }
// }
