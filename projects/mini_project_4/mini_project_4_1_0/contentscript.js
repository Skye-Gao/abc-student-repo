window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  console.log("scrolled!");
  // console.log(window.pageYOffset);
  // let image = document.getElementById("reload");
  document.body.style.transform = "rotate(" + Number(window.pageYOffset/7)*(-1) + "deg)";
}
