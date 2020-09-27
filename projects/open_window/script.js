let button=window.document.getElementById("button");
console.log(button);

let sw=screen.width;
let sh=screen.height;

function openWindow(){
  console.log("now a window should open");
  let randomX=Math.random()*(sw-400);
  let randomY=Math.random()*(sh-100);
  let randomTime=5000+Math.random()*4000;
  let newWindow=window.open("pop_up_windows/pop_up.html","","width=500,height=200,left="+randomX+",top="+randomY+"");
  setTimeout(function(){
    //what we want to happen after setTimeout
    newWindow.close();
  }, 3000);
};

function openManyWindows(){
  for(let i=0;i<30;i++){
    openWindow();
  }
}

button.addEventListener("click",openManyWindows)
