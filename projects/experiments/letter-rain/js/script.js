// select first
// let range = document.getElementById("myRange");
let contentElement = document.getElementById("content");
let text = contentElement.innerHTML;
let letters = text.split(" ");
let letterSpans = letters.map((letter)=>{ return "<span>"+letter+"</span>"});
let joined = letterSpans.join(" ");
contentElement.innerHTML = joined;
let spanTags = contentElement.getElementsByTagName("span");

console.log(joined);
