const resistorColors = [
    { name: "Đen", value: 0, color: "black" },
    { name: "Nâu", value: 1, color: "brown" },
    { name: "Đỏ", value: 2, color: "red" },
    { name: "Cam", value: 3, color: "orange" },
    { name: "Vàng", value: 4, color: "yellow" },
    { name: "Lục", value: 5, color: "green" },
    { name: "Lam", value: 6, color: "blue" },
    { name: "Tím", value: 7, color: "violet" },
    { name: "Xám", value: 8, color: "gray" },
    { name: "Trắng", value: 9, color: "white" }
];

const multiplierOptions = [
    { label: "x1", value: 1, color: "black" },
    { label: "x10", value: 10, color: "brown" },
    { label: "x100", value: 100, color: "red" },
    { label: "x1K", value: 1000, color: "orange" },
    { label: "x10K", value: 10000, color: "yellow" },
    { label: "x100K", value: 100000, color: "green" },
    { label: "x1M", value: 1000000, color: "blue" }
];

const toleranceOptions = [
    { label: "±1%", value: 1, color: "brown" },
    { label: "±2%", value: 2, color: "red" },
    { label: "±5%", value: 5, color: "gold" },
    { label: "±10%", value: 10, color: "silver" }
];

function populateResistorSelectors() {

    const band1 =
        document.getElementById("band1");

    const band2 =
        document.getElementById("band2");

    const multiplier =
        document.getElementById("multiplier");

    const tolerance =
        document.getElementById("tolerance");

    resistorColors.forEach(c => {

        band1.innerHTML += `
            <option value="${c.value}">
                ${c.name}
            </option>
        `;

        band2.innerHTML += `
            <option value="${c.value}">
                ${c.name}
            </option>
        `;
    });

    multiplierOptions.forEach(m => {

        multiplier.innerHTML += `
            <option value="${m.value}">
                ${m.label}
            </option>
        `;
    });

    toleranceOptions.forEach(t => {

        tolerance.innerHTML += `
            <option value="${t.value}">
                ${t.label}
            </option>
        `;
    });
}

function formatResistance(value) {

    if (value >= 1000000) {
        return (
            (value / 1000000).toFixed(2)
            + " MΩ"
        );
    }

    if (value >= 1000) {
        return (
            (value / 1000).toFixed(2)
            + " KΩ"
        );
    }

    return value + " Ω";
}

function calculateResistor() {

    const b1 =
        parseInt(
            document.getElementById("band1").value
        );

    const b2 =
        parseInt(
            document.getElementById("band2").value
        );

    const multiplier =
        parseInt(
            document.getElementById("multiplier").value
        );

    const tolerance =
        parseInt(
            document.getElementById("tolerance").value
        );

    const resistance =
        ((b1 * 10) + b2) * multiplier;

    document.getElementById(
        "resistorResult"
    ).innerHTML = `
        Giá trị:
        ${formatResistance(resistance)}
        <br><br>
        Sai số:
        ±${tolerance}%
    `;

    document.getElementById("b1").style.background =
        resistorColors[b1].color;

    document.getElementById("b2").style.background =
        resistorColors[b2].color;

    document.getElementById("b3").style.background =
        multiplierOptions.find(
            x => x.value == multiplier
        ).color;

    document.getElementById("b4").style.background =
        toleranceOptions.find(
            x => x.value == tolerance
        ).color;
}

populateResistorSelectors();
calculateResistor();
