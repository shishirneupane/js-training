// clock
const root = document.getElementById('root');
const currentTime = document.createElement('h1');

setInterval(function () {
	const date = new Date();
	const time = `Current Time - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	currentTime.textContent = time;
}, 1000);

root.appendChild(currentTime);

// stopwatch
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let interval = null;

const stopwatchTime = document.createElement('h1');
stopwatchTime.textContent = `Stopwatch - ${h}:${m}:${s}:${ms}`;
const startBtn = document.createElement('button');
startBtn.textContent = 'Start';
const stopBtn = document.createElement('button');
stopBtn.textContent = 'Stop';
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';

function runStopwatch() {
	ms = ms + 5;
	if (ms >= 1000) {
		ms = 0;
		s++;
	}
	if (s >= 60) {
		s = 0;
		m++;
	}
	if (m >= 60) {
		m = 0;
		h++;
	}
	if (h >= 24) {
		return;
	}
	stopwatchTime.textContent = `Stopwatch - ${h}:${m}:${s}:${ms}`;
}

startBtn.addEventListener('click', function () {
	startBtn.replaceWith(stopBtn);
	interval = setInterval(runStopwatch, 1);
});

stopBtn.addEventListener('click', function () {
	clearInterval(interval);
	stopBtn.replaceWith(startBtn);
});

resetBtn.addEventListener('click', function () {
	clearInterval(interval);
	stopBtn.replaceWith(startBtn);
	ms = 0;
	s = 0;
	m = 0;
	h = 0;
	stopwatchTime.textContent = `Stopwatch - ${h}:${m}:${s}:${ms}`;
});

root.appendChild(stopwatchTime);
root.appendChild(startBtn);
root.appendChild(resetBtn);
