const slider =
    document.getElementById("servoSlider");

const arm =
    document.getElementById("servoArm");

slider.addEventListener("input", () => {

    const angle = slider.value;

    arm.style.transform =
        `rotate(${angle - 90}deg)`;

    document.getElementById(
        "servoResult"
    ).innerHTML =
        `Góc Servo: ${angle}°`;
});
