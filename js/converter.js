function convertUnit() {

    const value =
        parseFloat(
            document.getElementById("unitValue").value
        );

    const type =
        document.getElementById("unitType").value;

    let result = 0;

    if (type === "1000") {

        result = value / 1000;

        document.getElementById(
            "unitResult"
        ).innerHTML =
            `${result} A`;
    }

    else if (type === "1000000") {

        result = value / 1000000;

        document.getElementById(
            "unitResult"
        ).innerHTML =
            `${result} F`;
    }

    else {

        result = value * 1000;

        document.getElementById(
            "unitResult"
        ).innerHTML =
            `${result} Ω`;
    }
}
