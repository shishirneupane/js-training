const MAIN_WIDTH = window.innerWidth;
const MAIN_HEIGHT = window.innerHeight;

// BALL

const BALL_RADIUS = 20;
let BALL_POSITION = {
	X: MAIN_WIDTH / 2,
	Y: MAIN_HEIGHT / 2,
};
const BALL_SPEED = {
	X: 8,
	Y: 5,
};
let BALL_DIRECTION = {
	X: 1,
	Y: 1,
};

// PADDLE

const PADDLE_WIDTH = 120;
const PADDLE_HEIGHT = 30;
let PADDLE_POSITION = {
	X: MAIN_WIDTH / 2,
	Y: MAIN_HEIGHT - PADDLE_HEIGHT,
};

// BRICKS

const bricks = [
	[1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
	[0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
];

const BRICK_WIDTH = 120;
const BRICK_HEIGHT = 30;

let BRICK_POSITION = {
	X: 0,
	Y: 0,
};

// GAME OVER

let gameOver = false;

// CANVAS

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = MAIN_WIDTH;
canvas.height = MAIN_HEIGHT;

function buildBrick(brickPositionX, brickPositionY) {
	ctx.fillStyle = 'black';
	ctx.fillRect(brickPositionX, brickPositionY, BRICK_WIDTH, BRICK_HEIGHT);
}

function drawBricks() {
	ctx.fillStyle = 'black';
	//  ctx.fillRect(BRICK_POSITION.X, BRICK_POSITION.Y, PADDLE_WIDTH, PADDLE_HEIGHT);
	let brickPositionX;
	let brickPositionY;
	bricks.forEach((row, rowIndex) => {
		row.forEach((brick, brickIndex) => {
			if (brick === 1) {
				brickPositionX = brickIndex * BRICK_WIDTH;
				brickPositionY = 120 + rowIndex * BRICK_HEIGHT;
			}
			buildBrick(brickPositionX, brickPositionY);
		});
	});
}

function drawPaddle() {
	ctx.fillStyle = 'orange';
	ctx.fillRect(PADDLE_POSITION.X, PADDLE_POSITION.Y, PADDLE_WIDTH, PADDLE_HEIGHT);
}

window.addEventListener('mousemove', movePaddle);

function movePaddle(e) {
	if (e.clientX > PADDLE_WIDTH - BALL_RADIUS) {
		PADDLE_POSITION.X = e.clientX - PADDLE_WIDTH;
	}
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(BALL_POSITION.X, BALL_POSITION.Y, BALL_RADIUS, 0, 2 * Math.PI);
	ctx.fillStyle = 'blue';
	ctx.fill();
}

function moveBall() {
	BALL_POSITION.X = BALL_POSITION.X + BALL_SPEED.X * BALL_DIRECTION.X;
	BALL_POSITION.Y = BALL_POSITION.Y + BALL_SPEED.Y * BALL_DIRECTION.Y;
}

function changeDirections() {
	if (BALL_POSITION.X + BALL_RADIUS >= MAIN_WIDTH || BALL_POSITION.X - BALL_RADIUS <= 0) {
		BALL_DIRECTION.X = BALL_DIRECTION.X * -1;
	}

	if (BALL_POSITION.Y - BALL_RADIUS <= 0) {
		BALL_DIRECTION.Y = BALL_DIRECTION.Y * -1;
	}
}

function changeDirectionsWhenBallHitsPaddle() {
	if (
		BALL_POSITION.Y + BALL_RADIUS >= PADDLE_POSITION.Y &&
		BALL_POSITION.X >= PADDLE_POSITION.X &&
		BALL_POSITION.X <= PADDLE_POSITION.X + PADDLE_WIDTH
	) {
		BALL_DIRECTION.Y = BALL_DIRECTION.Y * -1;
	} else if (BALL_POSITION.Y + BALL_RADIUS > MAIN_HEIGHT) {
		gameOver = true;
	}
}

// GAMELOOP

function gameLoop() {
	if (gameOver) {
		ctx.font = '50px Arial';
		ctx.textAlign = 'center';
		ctx.fillStyle = 'black';
		ctx.fillText('Game Over', MAIN_WIDTH / 2, MAIN_HEIGHT / 2);
		cancelAnimationFrame(gameLoop);
		return;
	}
	ctx.clearRect(0, 0, MAIN_WIDTH, MAIN_HEIGHT);
	drawBricks();
	drawPaddle();
	drawBall();
	moveBall();
	changeDirections();
	changeDirectionsWhenBallHitsPaddle();
	requestAnimationFrame(gameLoop);
}

gameLoop();
