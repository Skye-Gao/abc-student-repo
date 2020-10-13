let background =  document.getElementById("background");
let imgs = document.getElementsByClassName("imgWrapper");
let originalPos=50;
let eachImageHeight=700;
let adjust3=-20;

let planning = [
  {
    // source1: "images/img00.jpg",
    slides: [
      0+originalPos,     // 0%
      -2*eachImageHeight+originalPos,  // 33%
      -3*eachImageHeight+originalPos,  // 66%
      -eachImageHeight+originalPos,
      -4*eachImageHeight+originalPos,
      -8*eachImageHeight+originalPos,
      -6*eachImageHeight+originalPos,
      -5*eachImageHeight+originalPos,
      -7*eachImageHeight +originalPos, // 100%
    ]
  },
  {
    // source2: "images/img01.jpg",
    slides: [
      -3*eachImageHeight+originalPos,     // 0%
      0+originalPos,  // 33%
      -eachImageHeight+originalPos,  // 66%
      -4*eachImageHeight+originalPos,
      -8*eachImageHeight+originalPos,
      -5*eachImageHeight+originalPos,
      -7*eachImageHeight+originalPos,
      -2*eachImageHeight+originalPos,
      -6*eachImageHeight +originalPos,
    ]
  },

  {
    // source3: "images/img01.jpg",
    slides: [
      -eachImageHeight+originalPos,     // 0%
      -3*eachImageHeight+originalPos,  // 33%
      -5*eachImageHeight+originalPos,  // 66%
      -2*eachImageHeight+originalPos,
      0+originalPos,
      -4*eachImageHeight+originalPos,
      -8*eachImageHeight+originalPos,
      -6*eachImageHeight+originalPos,
      -7*eachImageHeight +originalPos,
    ]
  },
  {
    // source4: "images/img00.jpg",
    slides: [
      -2*eachImageHeight+originalPos+adjust3,     // 0%
      -4*eachImageHeight+originalPos+adjust3,  // 33%
      -3*eachImageHeight+originalPos+adjust3,  // 66%
      -6*eachImageHeight+originalPos+adjust3,
      -eachImageHeight+originalPos+adjust3,
      -7*eachImageHeight+originalPos+adjust3,
      0+originalPos+adjust3,
      -8*eachImageHeight+originalPos+adjust3,
      -5*eachImageHeight +originalPos+adjust3,
    ]
  },
  {
    // source5: "images/img01.jpg",
    slides: [
      0+originalPos,     // 0%
      -eachImageHeight+originalPos,  // 33%
      -2*eachImageHeight+originalPos,  // 66%
      -3*eachImageHeight+originalPos,
      -4*eachImageHeight+originalPos,
      -5*eachImageHeight+originalPos,
      -6*eachImageHeight+originalPos,
      -7*eachImageHeight+originalPos,
      -8*eachImageHeight +originalPos,
    ]
  },
  {
    // source6: "images/img01.jpg",
    slides: [
      -4*eachImageHeight+originalPos-180,     // 0%
      -6*eachImageHeight+originalPos-180,  // 33%
      -8*eachImageHeight+originalPos-180,  // 66%
      -5*eachImageHeight+originalPos-180,
      -7*eachImageHeight+originalPos-180,
      -2*eachImageHeight+originalPos-180,
      0+originalPos-180,
      -3*eachImageHeight+originalPos-180,
      -eachImageHeight +originalPos,
    ]
  },
  {
    // source7: "images/img00.jpg",
    slides: [
      -6*eachImageHeight+originalPos-265,     // 0%
      -5*eachImageHeight+originalPos,  // 33%
      0+originalPos,  // 66%
      -7*eachImageHeight+originalPos,
      -3*eachImageHeight+originalPos,
      -eachImageHeight+originalPos,
      0+originalPos,
      -3*eachImageHeight+originalPos,
      -4*eachImageHeight +originalPos-180,
    ]
  },
  {
    // source8: "images/img01.jpg",
    slides: [
      -5*eachImageHeight+originalPos-220,     // 0%
      -eachImageHeight+originalPos,  // 33%
      -7*eachImageHeight+originalPos,  // 66%
      -8*eachImageHeight+originalPos,
      -6*eachImageHeight+originalPos,
      -3*eachImageHeight+originalPos,
      0+originalPos,
      -4*eachImageHeight+originalPos,
      -2*eachImageHeight +originalPos-80,
    ]
  },
  {
    // source9: "images/img01.jpg",
    slides: [
      -7*eachImageHeight+originalPos-310,     // 0%
      -8*eachImageHeight+originalPos,  // 33%
      -4*eachImageHeight+originalPos,  // 66%
      -6*eachImageHeight+originalPos,
      -2*eachImageHeight+originalPos,
      0+originalPos,
      -5*eachImageHeight+originalPos,
      -eachImageHeight+originalPos,
      -3*eachImageHeight +originalPos,
    ]
  },
  {
    // source10: "images/img01.jpg",
    slides: [
      -8*eachImageHeight+originalPos-350,     // 0%
      -7*eachImageHeight+originalPos,  // 33%
      -6*eachImageHeight+originalPos,  // 66%
      -2*eachImageHeight+originalPos,
      -5*eachImageHeight+originalPos,
      -4*eachImageHeight+originalPos,
      -3*eachImageHeight+originalPos,
      -eachImageHeight +originalPos,
      0+originalPos,
    ]
  },
]

for(let i = 0; i < planning.length; i++){
  let imgWrapper = document.createElement("div");
  imgWrapper.className = "imgWrapper";
  let img = document.createElement("img");
  img.src ="images/"+(i+1)+".jpg"//planning[i].source;
  imgWrapper.appendChild(img);
  console.log("img"+img.style.width);
  imgWrapper.style.top = planning[i].slides[0]+ "px";
  background.appendChild(imgWrapper);
}

window.addEventListener('scroll', function(){ // on page scroll
  let scrolltop = window.pageYOffset;
  let windowHeight=window.innerHeight;
  let pageHeight = document.getElementById("scrollLength").offsetHeight;
  let possibleScrollDistance = pageHeight - windowHeight;
  let percent=scrolltop/possibleScrollDistance*100;

  document.getElementById("percentScrolled").innerHTML = percent;

  let numberOfStages=planning[0].slides.length;
  let percentagePerStep=1/(numberOfStages-1)*100;
  console.log(percentagePerStep);
  let currentStage=Math.floor(percent/percentagePerStep);

  document.getElementById("currentStep").innerHTML = currentStage;

  // //mapping percentage to certain range
  function map(percent,in_min, in_max, out_min, out_max) {
    return (percent - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  let percentageInCurrentStage=map(percent-percentagePerStep*currentStage,0, percentagePerStep,0,100 );
  document.getElementById("percentageInCurrentStep").innerHTML = percentageInCurrentStage;

  for(let i = 0; i < planning.length; i++){
    let lowerEnd=planning[i].slides[currentStage];
    let upperEnd=planning[i].slides[currentStage+1];
    let position=map(percentageInCurrentStage,0,100,lowerEnd,upperEnd);
    imgs[i].style.top=position+"px";
  }
  //
  // for(let i = 0; i < imgs.length; i++){
  //   let cursorStage1=planning[i].cursorStage1;
  //   let cursorStage2=planning[i].cursorStage2;
  //   let cursorStage3=planning[i].cursorStage3;
  //   // console.log(planning[i].stage1);
  //   console.log(cursorStage1, cursorStage2);
  //   if (percent>=0&&percent<cursorStage1){
  //     imgs[i].style.top = map(percent,0,cursorStage1,0,200)+"px";
  //   }else if (percent>=cursorStage1 && percent<cursorStage2){
  //     imgs[i].style.top = map(percent,cursorStage1,cursorStage2,200,0)+"px";
  //   }else if(percent>=cursorStage2 && percent<cursorStage3){
  //     imgs[i].style.top = map(percent,cursorStage2,cursorStage3,0,500)+"px";
  //   }
  //   // else{
  //   //   imgs[1].style.top = w*percent+"px";
  //   //   imgs[0].style.top = w*percent+"px";
  //   // }
  //
  // }
}, false)

//-------------------------hard code examples in window.addEventListener---------------

// for(let i = 0; i < bubbles.length; i++){
//   bubbles[i].style.top = scrolltop/(i+1) + "px";
// }

// bubbles[0].style.top = scrolltop/(2) - 400 + "px";
// bubbles[1].style.top = scrolltop + 200 + "px";
// bubbles[2].style.top = scrolltop/5 + "px";
//-----------------------------------------------------------
