var MAIN_WIDTH = 800;
var MAIN_HEIGHT = 600;
var BALL_WIDTH = 50;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = 'gray';
canvas.width = MAIN_WIDTH;
canvas.height = MAIN_HEIGHT;
ctx.lineWidth = 4;

class Ball {
	constructor(position, speed, direction) {
		this.position = position;
		this.speed = speed;
		this.direction = direction;
	}

	drawBall() {
		ctx.strokeRect(0, 0, 50, 50);
	}

	moveBall() {
		this.position.x = this.position.x + this.speed.x * this.direction.x;
		if (this.position.x + BALL_WIDTH >= MAIN_WIDTH) {
			this.position.x = MAIN_WIDTH - BALL_WIDTH;
		}

		this.position.y = this.position.y + this.speed.y * this.direction.y;
		if (this.position.y + BALL_WIDTH >= MAIN_HEIGHT) {
			this.position.y = MAIN_HEIGHT - BALL_WIDTH;
		}

		ctx.strokeRect(this.position.x, this.position.y, 50, 50);
	}

	changeDirections() {
		if (this.position.x + BALL_WIDTH >= MAIN_WIDTH || this.position.x <= 0) {
			this.direction.x = this.direction.x * -1;
		}

		if (this.position.y + BALL_WIDTH >= MAIN_HEIGHT || this.position.y <= 0) {
			this.direction.y = this.direction.y * -1;
		}
	}

	// boxCollision() {
	// 	if (this.position.x + BALL_WIDTH) {
	// 	}
	// }
}

var ball1 = new Ball({ x: 0, y: 0 }, { x: 3, y: 3 }, { x: 1, y: 1 });
ball1.drawBall();

var ball2 = new Ball({ x: 100, y: 0 }, { x: 5, y: 5 }, { x: 1, y: 1 });
ball2.drawBall();

function startGame() {
	ctx.clearRect(0, 0, MAIN_WIDTH, MAIN_HEIGHT);

	ball1.moveBall();
	ball1.changeDirections();

	ball2.moveBall();
	ball2.changeDirections();

	requestAnimationFrame(startGame);
}

startGame();
