let btn=document.getElementsByClassName("button");

let buttonOne=window.document.getElementById("buttonOne");
let buttonTwo=window.document.getElementById("buttonTwo");
let buttonThree=window.document.getElementById("buttonThree");
// console.log(buttonOne);

let sw=screen.width;
let sh=screen.height;
let w = window.innerWidth;
let h = window.innerHeight;
console.log(w);
console.log(h);

buttonOne.style.top = 100+Math.floor((Math.random() * (h-400)) + 1) + "px";
buttonOne.style.left = 400+Math.floor((Math.random() * (w-400)) + 1) + "px";
buttonTwo.style.top = 100+Math.floor((Math.random() * (h-400)) + 1) + "px";
buttonTwo.style.left = 400+Math.floor((Math.random() * (w-400)) + 1) + "px";
buttonThree.style.top = 100+Math.floor((Math.random() * (h-400)) + 1) + "px";
buttonThree.style.left = 400+Math.floor((Math.random() * (w-400)) + 1) + "px";

function openWindowOne(){
  console.log("now a window should open");
  let randomX=Math.random()*(sw-400);
  let randomY=Math.random()*(sh-100);
  let randomW=300+Math.random()*500;
  let randomH=200+Math.random()*300;
  let randomTime=5000+Math.random()*4000;
  let newWindow=window.open("pop_up_1/pop_up.html","","width="+randomW+",height="+randomH+",left="+randomX+",top="+randomY+"");
  setTimeout(function(){
    //what we want to happen after setTimeout
    document.getElementById('buttonOne').style.display='none';
    newWindow.close();
  }, 5000);
};

function openWindowTwo(){
  console.log("now a window should open");
  let randomX=Math.random()*(sw-400);
  let randomY=Math.random()*(sh-100);
  let randomW=200+Math.random()*500;
  let randomH=300+Math.random()*100;
  let randomTime=5000+Math.random()*4000;
  let newWindow=window.open("pop_up_2/pop_up.html","","width="+randomW+",height="+randomH+",left="+randomX+",top="+randomY+"");
  setTimeout(function(){
    //what we want to happen after setTimeout
    document.getElementById('buttonTwo').style.display='none';
    newWindow.close();
  }, 5000);
};

function openWindowThree(){
  console.log("now a window should open");
  let randomX=Math.random()*(sw-400);
  let randomY=Math.random()*(sh-100);
  let randomTime=5000+Math.random()*4000;
  let newWindow=window.open("pop_up_3/pop_up.html","","width=500,height=200,left="+randomX+",top="+randomY+"");
  setTimeout(function(){
    //what we want to happen after setTimeout
    document.getElementById('buttonThree').style.display='none';
    document.getElementById('comment').style.display='none';
    newWindow.close();
  }, 8000);
};

function openManyWindowsOne(){
  for(let i=0;i<5;i++){
    openWindowOne();
  }
}

function openManyWindowsTwo(){
  for(let i=0;i<5;i++){
    openWindowTwo();
  }
}

function openManyWindowsThree(){
  for(let i=0;i<5;i++){
    openWindowThree();
  }
  document.getElementById('comment').style.display='block';
}

buttonOne.addEventListener("click",openManyWindowsOne)
buttonTwo.addEventListener("click",openManyWindowsTwo)
buttonThree.addEventListener("click",openManyWindowsThree)

var seconds_left = 30;

var interval = setInterval(function() {
  document.getElementById('time').innerHTML = --seconds_left;

  if (seconds_left <= 0)
  {
    document.getElementById('time').innerHTML = "0";
    clearInterval(interval);
  }
}, 1000);
