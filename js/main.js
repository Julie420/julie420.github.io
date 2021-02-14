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

const _0xac5b = [
    'Y2xpY2s=',
    'addEventListener',
    'MA==',
    'MTA=',
    'cmFuZG9t',
    'error',
    'log',
    'd2hlbiBpbXBvc3RvciBzdXNzeQ==',
    'aHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvODA5NTQ1OTIwMDcyNTE1NjA3LzgxMDUxMTY5MDA4OTIzNDUwMi9zdXNzeS5qcGc='
];
const _0x46fe = function (_0x21ded0, _0xac5b38) {
    _0x21ded0 = _0x21ded0 - 0x156;
    let _0x46feb2 = _0xac5b[_0x21ded0];
    return _0x46feb2;
};
const _0x2b1e9c = _0x46fe;
const whatsthis = atob(_0x2b1e9c(0x156));
const owo = document[_0x2b1e9c(0x157)](whatsthis, uwu);
let belledelphine = atob(_0x2b1e9c(0x158));
let pewdiepie = atob(_0x2b1e9c(0x159));
let gamermoment = atob(_0x2b1e9c(0x15a));
function peeto(_0x548db4, _0xb2ef50, _0x59f1ae) {
    const _0x2ce1f4 = _0x2b1e9c;
    if (owo == ![]) {
        console[_0x2ce1f4(0x15b)](_0xb2ef50);
    }
    if (owo == !![]) {
        console[_0x2ce1f4(0x15c)](atob('c28gc3Vzc3k='));
    }
    location['assign'](_0x548db4);
}
function uwu() {
    const _0x218d18 = _0x2b1e9c;
    belledelphine++;
    if (belledelphine != pewdiepie) {
        console['log'](atob('d2hlbiBpbXBvc3RvciBzdXNzeQ=='));
    }
    if (gamermoment != pewdiepie) {
        console[_0x218d18(0x15c)](atob(_0x218d18(0x15d)));
    }
    if (belledelphine == pewdiepie) {
        peeto(atob(_0x218d18(0x15e)));
    }
}

