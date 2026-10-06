function draw() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.moveTo(25, 25);
        ctx.lineTo(25, 105);
        ctx.moveTo(25, 105);
        ctx.lineTo(105, 105);
        ctx.stroke();
    }
}