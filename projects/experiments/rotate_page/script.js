// index.js

var div = document.createElement('div');
var div2=document.createElement('div');

div.innerHTML = document.body.innerHTML;
div2.innerHTML = document.body.innerHTML;
div.id="old";
div2.id="new";

document.body.innerHTML = "";

document.body.appendChild(div);
document.body.appendChild(div2);

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
  console.log(window.pageYOffset);
    // let image = document.getElementById("reload");
    // document.body.style.transform = "rotate(" + Number(window.pageYOffset/10)*(-1) + "deg)";
    document.getElementById("old").style.transform="rotate(" + Number(window.pageYOffset/10*(-1)) + "deg)";
    document.getElementById("new").style.transform="rotate(" + Number(window.pageYOffset/10) + "deg)";
    // document.getElementById("old").style.transformOrigin="center";
    // document.getElementById("new").style.transformOrigin="center";

}
