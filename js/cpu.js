let cpuChart;

function generateCPU() {

    const labels = [];
    const values = [];

    for (let i = 0; i < 20; i++) {

        labels.push(i);

        values.push(
            Math.floor(
                Math.random() * 100
            )
        );
    }

    const ctx =
        document.getElementById("cpuChart");

    if (cpuChart) {
        cpuChart.destroy();
    }

    cpuChart = new Chart(ctx, {

        type: "line",

        data: {

            labels,

            datasets: [
                {
                    label: "CPU %",
                    data: values
                }
            ]
        }
    });

    document.getElementById(
        "cpuResult"
    ).innerHTML =
        "Mô phỏng CPU hoàn tất";
}
