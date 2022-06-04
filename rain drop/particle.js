export class Particle {
  constructor(rainX, canvasHeigt) {
    this.rainX = rainX;
    this.canvasHeigt = canvasHeigt;
  }

  draw(ctx) {
    ctx.fillStyle = "#DAEAF1";
    ctx.beginPath();
    ctx.arc(this.rainX, this.canvasHeigt + 1, 3, Math.PI * 2, false);
    ctx.fill();
  }
}
