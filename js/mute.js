const mute = document.getElementById("mute");

const muteKeys = {
    77: "m",
    85: "u",
    84: "t",
    69: "e"
};
const muteCode = ["m", "u", "t", "e"];

let muteCodePosition = 0;

document.addEventListener("keydown", function (e) {
    const key = muteKeys[e.keyCode];
    const requiredKey = muteCode[muteCodePosition];

    if (key == requiredKey) {
        muteCodePosition++;
        if (muteCodePosition == muteCode.length) {
            muteCodePassed();
            muteCodePosition = 0;
        }
    } else {
        muteCodePosition = 0;
    }
});

function muteCodePassed() {
    sotpsteelinmycoad.pause();
    rick.pause();
}
