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