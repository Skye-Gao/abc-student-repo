var imagesArray = ["family.jpg", "no.jpg", "wedding.jpeg", "pet.jpg","mom.png","help.png"];

var usedImages = [];

function displayImage(){
  var num = Math.floor(Math.random() * (imagesArray.length));

  var thisImage = imagesArray[num];
  usedImages.push(thisImage);
  imagesArray.splice(num+1, 1);

  if (imagesArray.length < 1) {
    images = usedImages.splice(0, usedImages.length);
  }

  document.getElementById("image").src = "images/"+imagesArray[num];
}

window.onload =displayImage;
