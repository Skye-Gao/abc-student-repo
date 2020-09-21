let range=document.getElementById("myRange");
let content=document.getElementById("content");

let text=content.innerHTML;
console.log (text);
let letters=text.split("");
console.log (letters);
let letterSpans=letters.map((letter)=>{return "<span>"+letter+"</span>"});
console.log (letterSpans);
let spanString=letterSpans.join("");
console.log (spanString);

content.innerHTML=spanString;

let spanTags=document.getElementsByTagName("span");
console.log(spanTags);


range.addEventListener("input",()=>{
  let value=range.value;
  for (let i=0;i<spanTags.length;i++){
    spanTags[i].style.top=value*(Math.random()*5)+"px";
  }
})
