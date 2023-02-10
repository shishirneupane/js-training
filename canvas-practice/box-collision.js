const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = 'gray';
canvas.width = 500;
canvas.height = 500;

ctx.lineWidth = 6;
ctx.strokeRect(50, 50, 400, 400);

var position = {
	x: 50,
	y: 50,
};

function changeDirection() {
	position.x = position.x - 5;
	// console.log(position.x);

	ctx.clearRect(50, 50, 400, 400);
	ctx.strokeRect(position.x, 50, 50, 50);
	requestAnimationFrame(changeDirection);
}

function moveBall() {
	position.x = position.x + 5;

	if (position.x <= 400) {
		ctx.clearRect(50, 50, 400, 400);
		ctx.strokeRect(position.x, 50, 50, 50);
		requestAnimationFrame(moveBall);
	}

	if (position.x > 400) {
		cancelAnimationFrame(moveBall);
		requestAnimationFrame(changeDirection);
	}
}

requestAnimationFrame(moveBall);
