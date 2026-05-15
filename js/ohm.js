function calculateOhm() {

    const voltage =
        parseFloat(
            document.getElementById("voltage").value
        );

    const current =
        parseFloat(
            document.getElementById("current").value
        );

    const resistance =
        voltage / current;

    document.getElementById(
        "ohmResult"
    ).innerHTML =
        `R = ${resistance.toFixed(2)} Ω`;
}
