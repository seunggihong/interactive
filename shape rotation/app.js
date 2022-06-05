import { Polygon } from "./polygon.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize = () => {
    this.canvasWidth = document.body.clientWidth;
    this.canvasHeight = document.body.clientHeight;

    this.canvas.width = this.canvasWidth * this.pixelRatio;
    this.canvas.height = this.canvasHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.polygon = new Polygon(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasHeight / 3,
      3
    );
  };

  animate = () => {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.polygon.animate(this.ctx);
  };
}

window.onload = () => {
  new App();
};
