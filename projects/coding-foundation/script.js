//set colors
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];

//add shapes
function changeShapeNum(){
  var n = document.getElementById("number");
  var defaultVal=n.defaultValue;
  var inputVal = n.value;
//add shapes according to the input number
  for (var i = 0; i < inputVal; i++){
    var x = document.createElement("div");
    x.setAttribute("class", "shape");
    x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];//assign random colors
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
