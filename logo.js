logo = document.getElementById("logo");
logodiv = document.getElementById("logodiv");
if(Math.floor(Math.random() * 2) == 0){
    img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "auto";
    logodiv.removeChild(logo);
    img.style.margin = "0 auto";
    switch (Math.floor(Math.random() * 5)) {
        case 0:img.src = "./logo/1.gif";break;
        case 1:img.src = "./logo/2.png";break;
        case 2:img.src = "./logo/3.png";break;
        case 3:img.src = "./logo/4.png";break;
        case 4:img.src = "./logo/5.png";break;
    }
    logodiv.appendChild(img);
    console.log("disdasd");
}
function checkOrientation(sss) {
  const el = document.getElementById("rightTopaling");
if(!el){return;}
  if (sss) {
    document.getElementById("zgori").style.flexDirection = "column";
    document.getElementById("prijaviteText").style.display = "none";
    el.style.display = "flex";
    el.style.flexDirection = "row";
    el.style.marginLeft = "unset";
    el.style.justifyContent = "center";
    el.style.alignItems = "center";
  } else {
    document.getElementById("zgori").style.flexDirection = "row";
    document.getElementById("prijaviteText").style.display = "inline-block";
    el.style.display = "";
    el.style.flexDirection = "";
    el.style.marginLeft = "auto";
    el.style.justifyContent = "";
    el.style.alignItems = "";
  }
}
window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
checkOrientation(e.matches);
});
checkOrientation(window.matchMedia("(orientation: portrait)").matches);