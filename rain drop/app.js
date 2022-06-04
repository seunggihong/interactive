import { Rain } from "./rain.js";

const RAIN_COUNT = 50;

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    document.body.appendChild(this.canvas);

    window.requestAnimationFrame(this.animate.bind(this));

    this.pressFalg = false;
    window.addEventListener("mousedown", () => {
      this.pressFalg = true;
    });
    window.addEventListener("mouseup", () => {
      this.pressFalg = false;
    });

    this.speeds = [];
    this.randomSpeedCreater();

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
    for (let index = 0; index < RAIN_COUNT; index++) {
      this.rains.push(new Rain(this.canvasWidth, 5, this.speeds[index]));
    }
  }

  randomSpeedCreater() {
    for (let index = 0; index < RAIN_COUNT; index++) {
      this.speeds.push(Math.random() * 10 + 1);
    }
  }

  infiniteDrop() {
    this.rains.forEach((rain) => {
      if (rain.y > this.canvasHeight) {
        rain.y = 0;
        rain.vy = this.speeds[this.rains.indexOf(rain)];
      }
      rain.draw(this.ctx);
    });
    if (this.pressFalg) {
      for (let index = 0; index < RAIN_COUNT; index++) {
        this.rains[index].vy = 0;
      }
    } else {
      for (let index = 0; index < RAIN_COUNT; index++) {
        this.rains[index].vy = this.speeds[index];
      }
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.infiniteDrop();
  }
}

window.onload = () => {
  new App();
};
