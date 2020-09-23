let range=document.getElementById("myRange");
// let txt="shadow circular text ";
// let radius=100;
// let classIndex=0;

function circularText(txt, radius, classIndex) {
ctxt = txt.split(""),
// classIndex = document.getElementsByClassName("circTxt")[classIndex];
classIndex = document.getElementById("shadow");
var deg = 360 / ctxt.length;
console.log(ctxt);
var origin =0;

ctxt.forEach((ea) => {
  ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
  classIndex.innerHTML += ea;
  range.addEventListener("input",()=>{
    let value=range.value;
    radius=value;
    })
  origin += deg;
})
};

circularText("shadow circular text ", 100, 0);

// let letterSpans=ctxt.map((letter)=>{return "<span>"+letter+"</span>"});
// let spanString=letterSpans.join("");
// let spanTags=document.getElementsByTagName("span");
// console.log (spanString);

range.addEventListener("input",()=>{
  let value=range.value;
  for (let i=0;i<spanTags.length;i++){
    spanTags[i].style.rotate=value*(Math.random()*200)+"px";
  }
})
