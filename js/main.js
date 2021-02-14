const text = document.getElementById("text");
const sotpsteelinmycoad = document.getElementById("sotpsteelinmycoad");

text.addEventListener("click", clickFunc);

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function () {
    loaded();
  });
}

function loaded() {
  setInterval(loop, 720);
}

let x = 0;
const titleText = ["I", "I w", "I wu", "I wuv", "I wuv u", "<3"];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

function clickFunc() {
  text.removeEventListener("click", clickFunc);
  text.innerText = "cow😎";
  sotpsteelinmycoad.play();
  text.setAttribute("style", "cursor: default;");
}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

const whatsthis = atob("Y2xpY2s=")
const owo = document.addEventListener(whatsthis, uwu)

let belledelphine = atob("MA==")
let pewdiepie = atob("MTA=")
let gamermoment = atob("cmFuZG9t")

function peeto(a, b, c) {
    if(owo == false) {
        console.error(b)
    }
    if(owo == true) {
        console.log(atob("c28gc3Vzc3k="))
    }
    location.assign(a)

}

function uwu() {
    belledelphine++
    if(belledelphine != pewdiepie) { 
        console.log(atob("d2hlbiBpbXBvc3RvciBzdXNzeQ=="))
     }
    if(gamermoment != pewdiepie) { 
        console.log(atob("d2hlbiBpbXBvc3RvciBzdXNzeQ=="))
     }
     if(belledelphine == pewdiepie) {
        peeto(atob("aHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvODA5NTQ1OTIwMDcyNTE1NjA3LzgxMDUxMTY5MDA4OTIzNDUwMi9zdXNzeS5qcGc="))
     }
}

