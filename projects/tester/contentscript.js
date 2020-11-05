let words=[];

var limit = 4;
let newWords = [];


let text = document.body.innerHTML;

let letters = text.split("<br>");

let joined1 = letters.join(" ");

let letters2 = joined1.split(/\b/);
let letters3 = letters2.slice(21);

function getWordLengths(str) {
  let len = [];
  for (let i = 0; i < str.length; i++){
    if (str[i].length > limit){
      len.push(String(str[i]));
    }
  }
  return len;
}

let replac = getWordLengths(letters3);


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
      console.log(inputWord+"-" +replacer[0]);
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
  // console.log(letters2);
  let joined2 = letters3.join(" ");
  document.body.innerHTML = joined2;
  // return letters2;
}
