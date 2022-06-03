export class Rain {
  constructor(canvasWidth, radius) {
    this.radius = radius;
    this.vy = Math.random() * 10 + 1;

    const diameter = this.radius * 2;
    this.x = Math.random() * canvasWidth - diameter;
    this.y = 0;
  }

  draw(ctx) {
    this.y += this.vy;
    ctx.fillStyle = "#C6DCE4";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
