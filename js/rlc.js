let rlcChart;

function simulateRLC() {

    const r =
        parseFloat(
            document.getElementById("rVal").value
        );

    const l =
        parseFloat(
            document.getElementById("lVal").value
        );

    const c =
        parseFloat(
            document.getElementById("cVal").value
        );

    const resonance =
        1 / (
            2 *
            Math.PI *
            Math.sqrt(l * c)
        );

    document.getElementById(
        "rlcResult"
    ).innerHTML =
        `f = ${resonance.toFixed(2)} Hz`;

    const labels = [];
    const data = [];

    for (let i = 0; i < 100; i++) {

        labels.push(i);

        data.push(
            Math.exp(-0.03 * i)
            * Math.sin(0.3 * i)
        );
    }

    const ctx =
        document.getElementById("rlcChart");

    if (rlcChart) {
        rlcChart.destroy();
    }

    rlcChart = new Chart(ctx, {

        type: "line",

        data: {

            labels,

            datasets: [
                {
                    label: "RLC",
                    data
                }
            ]
        }
    });
}
