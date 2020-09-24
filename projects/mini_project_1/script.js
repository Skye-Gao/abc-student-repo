let range=document.getElementById("myRange");
// let txt="shadow circular text ";
// let radius=100;
// let classIndex=0;

function circularText(txt, radius, classIndex,origin) {
  ctxt = txt.split(""),
  classIndex = document.getElementsByClassName("circTxt")[classIndex];
  // classIndex = document.getElementById("shadow");
  var deg = 360 / ctxt.length;
  console.log(shadow);
  ctxt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  })
};

circularText("I have a spinning circle ", 250, 0,0);
circularText("Amazing right ? ", 100, 1,-90);
circularText("BUT this one does not want to spin LOL ", 100, 2,0);

function rotate(value) {
  document.getElementById('shadow').style.webkitTransform="rotate(" + value + "deg)";
  document.getElementById('shadow').style.msTransform="rotate(" + value + "deg)";
  document.getElementById('shadow').style.MozTransform="rotate(" + value + "deg)";
  document.getElementById('shadow').style.OTransform="rotate(" + value + "deg)";
  document.getElementById('shadow').style.transform="rotate(" + value + "deg)";

  document.getElementById('cursive').style.webkitTransform="rotate(" + value + "deg)";
  document.getElementById('cursive').style.msTransform="rotate(" + value + "deg)";
  document.getElementById('cursive').style.MozTransform="rotate(" + value + "deg)";
  document.getElementById('cursive').style.OTransform="rotate(" + value + "deg)";
  document.getElementById('cursive').style.transform="rotate(" + value + "deg)";

  document.getElementById('span1').innerHTML=value + "deg";
}

// let letterSpans=ctxt.map((letter)=>{return "<span>"+letter+"</span>"});
// let spanString=letterSpans.join("");
// let spanTags=document.getElementsByTagName("span");
// console.log (spanString);

// range.addEventListener("input",()=>{
//   let value=range.value;
//   for (let i=0;i<spanTags.length;i++){
//     spanTags[i].style.rotate=value*(Math.random()*200)+"px";
//   }
// })
