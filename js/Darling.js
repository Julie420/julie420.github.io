const kubaKeys = {
    75: "k",
    85: "u",
    66: "b",
    65: "a"
};
const kubaCode = ["k", "u", "b", "a"];

let kubaCodePosition = 0;

document.addEventListener("keydown", function (e) {
    const key = kubaKeys[e.keyCode];
    const requiredKey = kubaCode[kubaCodePosition];

    if (key == requiredKey) {
        kubaCodePosition++;
        if (kubaCodePosition == kubaCode.length) {
            kubaCodePassed();
            kubaCodePosition = 0;
        }
    } else {
        kubaCodePosition = 0;
    }
});

function kubaCodePassed() {
  popup("kys retard")
}
