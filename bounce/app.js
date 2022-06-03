import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    // create canvas
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    // client window size
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // canvas append html
    document.body.appendChild(this.canvas);

    // create ball on canvas
    this.ball = new Ball(this.canvasWidth, this.canvasHeight, 30, 10);
    // create block on vanvas
    this.block = new Block(600, 10, 150, 350);

    // animation frame
    window.requestAnimationFrame(this.animate.bind(this));
  }

  // resize window
  resize() {
    this.canvasWidth = document.body.clientWidth;
    this.canvasHeight = document.body.clientHeight;

    this.canvas.width = this.canvasWidth * 2;
    this.canvas.height = this.canvasHeight * 2;
    this.ctx.scale(2, 2);
  }

  // animate function
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.canvasWidth, this.canvasHeight, this.block);
  }
}

// load App class
window.onload = () => {
  new App();
};
