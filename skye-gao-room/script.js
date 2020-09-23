
//move image with cursor
function moveImg(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  // document.getElementById("demo").innerHTML = coor;
  //show image when hover
  var shark = document.getElementById("shark");
  shark.style.display="block";
//image positioning
  shark.style.left = x-150+'px';
  if (y>=400){
    shark.style.top = y-100+'px';
  }else{
    shark.style.top = y+50+'px';
  }

  console.log(x);
  console.log(y);
}

function clearCoor() {
  // document.getElementById("demo").innerHTML = "";
  //remove image when leave
  var shark = document.getElementById("shark");
  shark.style.display="none";
}
