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
