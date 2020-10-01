var imagesArray = ["car.jpg", "drive.jpg", "drive2.jpg", "emergency_room.jpeg", "nurse.jpg", "oxgen.jpg", "moniter.jpg"];

var usedImages = [];

function displayImage(){
  console.log("show images");
  var num = Math.floor(Math.random() * (imagesArray.length));

  var thisImage = imagesArray[num];
  usedImages.push(thisImage);
  imagesArray.splice(num+1, 1);

  if (imagesArray.length < 1) {
    images = usedImages.splice(0, usedImages.length);
  }

  document.getElementById("image").src = "images/"+imagesArray[num];
}

displayImage();
