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

sotpsteelinmycoad.ended = () => text.innerText = "Enoying the song?";

particlesJS.load('particles-js', '/resources/particlesjs-config.json', () => {
  console.log('particles.js loaded');
});

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

