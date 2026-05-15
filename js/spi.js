function simulateSPI() {

    const data =
        Math.floor(
            Math.random() * 255
        );

    document.getElementById(
        "spiResult"
    ).innerHTML =
        `
        Master:
        ${data}
        <br><br>
        Slave:
        ${255 - data}
        `;
}
