const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = 'gray';

// box
ctx.lineWidth = 3;
ctx.strokeRect(50, 50, 400, 400);

// vertical lines
ctx.beginPath();
ctx.moveTo(50 + 400 / 3, 50);
ctx.lineTo(50 + 400 / 3, 450);
ctx.stroke();

ctx.moveTo(50 + (400 / 3) * 2, 50);
ctx.lineTo(50 + (400 / 3) * 2, 450);
ctx.stroke();

// horizontal lines
ctx.moveTo(50, 50 + 400 / 3);
ctx.lineTo(450, 50 + 400 / 3);
ctx.stroke();

ctx.moveTo(50, 50 + (400 / 3) * 2);
ctx.lineTo(450, 50 + (400 / 3) * 2);
ctx.stroke();

// GAME LOGIC
var i = 0;
function showMole() {
	ctx.fillRect(50, 50, 400 / 3, 400 / 3);
	// ctx.clearRect(50, 50, 400 / 3, 400 / 3);
	// ctx.fillRect(50 + 400 / 3, 50, 400 / 3, 400 / 3);
	// ctx.clearRect(50, 50, 400 / 3, 400 / 3);
	// console.log('filled');
	setTimeout(showMole, 500);
}

showMole();
