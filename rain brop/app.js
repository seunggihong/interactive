import { Rain } from "./rain.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    document.body.appendChild(this.canvas);

    window.requestAnimationFrame(this.animate.bind(this));

    this.rains = [];
    this.spawnRain();
  }

  resize() {
    this.canvasWidth = document.body.clientWidth;
    this.canvasHeight = document.body.clientHeight;
    this.canvas.width = this.canvasWidth * 2;
    this.canvas.height = this.canvasHeight * 2;
    this.ctx.scale(2, 2);
  }

  spawnRain() {
    setInterval(() => {
      this.rains.push(new Rain(this.canvasWidth, 5));
      console.log(this.rains);
    }, 2000);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.rains.forEach((rain) => {
      rain.draw(this.ctx);
    });
  }
}

window.onload = () => {
  new App();
};
