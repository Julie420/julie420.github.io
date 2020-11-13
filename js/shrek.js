const shrekKeys = {
    83: "s",
    72: "h",
    82: "r",
    69: "e",
    75: "k"

};
const shrekCode = ["s", "h", "r", "e", "k"];

let shrekCodePosition = 0;

document.addEventListener("keydown", function (e) {
    const key = shrekKeys[e.keyCode];
    const requiredKey = shrekCode[shrekCodePosition];

    if (key == requiredKey) {
        shrekCodePosition++;
        if (shrekCodePosition == shrekCode.length) {
            shrekCodePassed();
            shrekCodePosition = 0;
        }
    } else {
        shrekCodePosition = 0;
    }
});

function shrekCodePassed() {
    popup("Yeah, \nshrek is waifu ngl")
}
