let background =  document.getElementById("background");
let imgs = document.getElementsByClassName("imgWrapper");

let planning = [
  {
    // source: "images/img00.jpg",
    startingPos: "0",
    stage1: "400px",
    stage2: "0px",
    stage3: "800px",
    speed: "9",
  },
  {
    // source: "images/img01.jpg",
    startingPos: "0",
    stage1: "500px",
    stage2: "0px",
    stage3: "100px",
    speed: "5",
  },
  {
    // source: "images/img01.jpg",
    startingPos: "0",
    stage1: "500px",
    stage2: "0px",
    stage3: "100px",
    speed: "9",
  },
]

for(let i = 0; i < planning.length; i++){
  let imgWrapper = document.createElement("div");
  imgWrapper.className = "imgWrapper";
  // let img = document.createElement("img");
  // img.src = planning[i].source;
  // imgWrapper.appendChild(img);
  imgWrapper.style.top = planning[i].startingPos+ "px";
  background.appendChild(imgWrapper);
}

window.addEventListener('scroll', function(){ // on page scroll
  let scrolltop = window.pageYOffset;
  for(let i = 0; i < imgs.length; i++){

    console.log(imgs[i].style.top+" "+planning[i].stage1);
    // console.log(scrolltop);
    // console.log(planning[i].stage1);
    // imgs[1].style.top = Number(scrolltop)/2-Number(planning[1].startingPos) + "px";
    // imgs[2].style.top = Number(scrolltop)-Number(planning[2].startingPos) + "px";

    if (imgs[i].style.top>=planning[i].stage1){
      imgs[i].style.top=-Number(scrolltop)+Number(planning[i].startingPos) + "px";
    }else{
      imgs[i].style.top = Number(scrolltop)+Number(planning[i].startingPos) + "px";
    }
  }

}, false)

//-------------------------hard code examples in window.addEventListener---------------

// for(let i = 0; i < bubbles.length; i++){
//   bubbles[i].style.top = scrolltop/(i+1) + "px";
// }

// bubbles[0].style.top = scrolltop/(2) - 400 + "px";
// bubbles[1].style.top = scrolltop + 200 + "px";
// bubbles[2].style.top = scrolltop/5 + "px";
//-----------------------------------------------------------
