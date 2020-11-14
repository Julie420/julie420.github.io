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

const rick = document.getElementById("rick");

const rickKeys = {
    83: "s",
    69: "e",
    67: "c",
    82: "r",
    69: "e",
    84: "t"
};
const rickCode = ["s", "e", "c", "r", "e", "t"];

let rickCodePosition = 0;

document.addEventListener("keydown", function (e) {
    const key = rickKeys[e.keyCode];
    const requiredKey = rickCode[rickCodePosition];

    if (key == requiredKey) {
        rickCodePosition++;
        if (rickCodePosition == rickCode.length) {
            rickCodePassed();
            rickCodePosition = 0;
        }
    } else {
        rickCodePosition = 0;
    }
});

function rickCodePassed() {
    sotpsteelinmycoad.pause()
    text.innerText = "riack roalled😎";
    rick.play()
    text.removeEventListener("click", clickFunc);
    text.setAttribute("style", "cursor: default;");
}

