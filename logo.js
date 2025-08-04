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
var gurt = `
   ____                        _                 ____        _     _        ___           _               . 
/ ___|  __ _ _ __ ___   ___ | |_ _____   _____/ ___|  ___ | |___| | _____|_ _|__ _ _ __(_) ___ ___        .
          \___ \ / _  | '_   _ \ / _ \| __/ _ \ \ / / _ \___ \ / _ \| / __| |/ / _  | |/ _  | '__| |/ __/ _ \       .
   ___) | (_| | | | | | | (_) | || (_) \ V |  __ ___) | (_) | \__ |   |  __ | | (_| | |  | | (_|  __/       .
            |____/ \__,_|_| |_| |_|\___/ \__\___/ \_/ \___|____/ \___/|_|___|_|\_\___|___\__, |_|  |_|\___\___|       .
                                                                             |___/                        .
`;
console.log(gurt);
console.log("YO! nE TUKI NAPISAT KARKOLI KI LAHKO LJUDJE DOBIJO VAS RACUN!!!!");
console.log(gurt);
console.log("YO! nE TUKI NAPISAT KARKOLI KI LAHKO LJUDJE DOBIJO VAS RACUN!!!!");
console.log(gurt);
console.log("YO! nE TUKI NAPISAT KARKOLI KI LAHKO LJUDJE DOBIJO VAS RACUN!!!!");
console.log(gurt);
console.log("YO! nE TUKI NAPISAT KARKOLI KI LAHKO LJUDJE DOBIJO VAS RACUN!!!!");
console.log("ce veste kaj se dogaja v js, probajte narediti eno igrico za tukaj!");