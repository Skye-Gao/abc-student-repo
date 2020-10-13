let background =  document.getElementById("background");
let imgs = document.getElementsByClassName("imgWrapper");

let planning = [
  {
    // source: "images/img00.jpg",
    startingPos: "0",
    cursorStage1: "10",
    cursorStage2: "20",
    cursorStage3: "80",
    speed: "9",
  },
  {
    // source: "images/img01.jpg",
    startingPos: "0",
    cursorStage1: "10",
    cursorStage2: "30",
    cursorStage3: "100",
    speed: "5",
  },
  {
    // source: "images/img01.jpg",
    startingPos: "0",
    cursorStage1: "20",
    cursorStage2: "30",
    cursorStage3: "100",
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
  let w=window.innerHeight;
  let percent=scrolltop/(7*w)*100;
  console.log("div position: "+w*percent+" "+"scrolltop: "+scrolltop+" "+"percentage: "+percent);

  let position=map(percent,0, 100, 50, 100);
  console.log(position);

  //mapping percentage to certain range
  function map(percent,in_min, in_max, out_min, out_max) {
    return (percent - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  for(let i = 0; i < imgs.length; i++){
    let cursorStage1=planning[i].cursorStage1;
    let cursorStage2=planning[i].cursorStage2;
    let cursorStage3=planning[i].cursorStage3;
    // console.log(planning[i].stage1);
    console.log(cursorStage1, cursorStage2);
    if (percent>=0&&percent<cursorStage1){
      imgs[i].style.top = map(percent,0,cursorStage1,0,200)+"px";
    }else if (percent>=cursorStage1 && percent<cursorStage2){
      imgs[i].style.top = map(percent,cursorStage1,cursorStage2,200,0)+"px";
    }else if(percent>=cursorStage2 && percent<cursorStage3){
      imgs[i].style.top = map(percent,cursorStage2,cursorStage3,0,500)+"px";
    }
    // else{
    //   imgs[1].style.top = w*percent+"px";
    //   imgs[0].style.top = w*percent+"px";
    // }

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
