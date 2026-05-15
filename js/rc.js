function calculateRC() {

    const r =
        parseFloat(
            document.getElementById("resistance").value
        );

    const c =
        parseFloat(
            document.getElementById("capacitance").value
        );

    const tau = r * c;

    document.getElementById(
        "rcResult"
    ).innerHTML =
        `τ = ${tau} giây`;
}
