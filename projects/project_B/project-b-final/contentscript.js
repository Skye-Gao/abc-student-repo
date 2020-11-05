
let randomTime = 1000;
//
// setTimeout(function(){
//
//
// },randomTime);


var txt;
  var number = prompt("Please enter the longest word you remember:", "Supercalifragilisticexpialidocious");
  if (number.length <= 4) {
      alert("I bet you'd remember something longer!☹️");
      location.reload();
  } else if (number == null || number == ""){
    alert("Don't trick me 🙄, try again, WITH ACTUAL WORDS!");
    location.reload();
  }else{
    txt = number.length;
    let randomTime = 1000;

    setTimeout(function(){
  alert("Now enjoy your reading!🤪");

    },randomTime);
  }


let words=[];

var limit = txt;
console.log(limit);
let newWords = [];

let text = document.body.innerHTML;
let box = document.createElement('div');


let letters = text.split("<br>");
// console.log(letters);
let joined1 = letters.join(" ");
// console.log(joined1);
let letters2 = joined1.split(/\b/);
// console.log(letters2);
let letters3 = letters2.slice(21);

function getWordLengths(str) {
  let len = [];
  for (let i = 0; i < str.length; i++){
    if (str[i].length == limit){
      len.push(String(str[i]));
    }
  }
  return len;
}


  // let replac = getWordLengths(letters3,numer);

let replac = getWordLengths(letters3);
// console.log(replac);


function findWords(arra){
  for (let i = 0; i < arra.length; i++){
    var num = letters3.indexOf(String(arra[i]));
    // in words are all the words that are 5 letters
    words.push(String(arra[i]));
  }
}
findWords(replac);

function getSimilarWord(inputWord, callback){
  let url = "https://api.datamuse.com/words?sp="+inputWord
  axios.get(url)
  .then(function (response) {
    let replacer = [];

    callback(response);
    for (let i = 0; i < response.data.length; i++){
      let wordobject = response.data[i];
      let newWord = wordobject.word;
      replacer.push(newWord);
      // console.log(replacer);
    }
    if (Number(replacer.length) > Number(1)){
      let long = Number(replacer.length);
      let number = Math.floor(Math.random() * long);
      console.log(inputWord+"-" +replacer[number]);
      changeWords(String(replacer[number]),inputWord);
    }else{
      console.logs(inputWord+"-" +replacer[0]);
      changeWords(String(replacer[0]),inputWord);
    }
  })
  .catch(function (error) {
    callback(error);
  })
}

for (i=0;i<words.length;i++){
  getSimilarWord(words[i], (similarwords)=>{
  });
}

function changeWords(wordd,original){
  var num = letters3.indexOf(String(original));
  letters3[num]= String(wordd);

  let joined2 = letters3.join(" ");

  document.body.innerHTML = joined2;

  // box.innerHTML = joined2;
   document.body.style.fontFamily = "sans-serif";
 document.body.style.color = "black";
 document.body.style.fontSize = "large";
 document.body.style.left = "200px";
 document.body.style.width = "60%";
 document.body.style.height = "100vh";
  contentElement.appendChild(box);
  // return letters2;
}
