var MAIN_WIDTH = 800;
var MAIN_HEIGHT = 600;
var BALL_WIDTH = 50;

var POSITION = {
  X: 200,
  Y: 0,
};
var POSITION_2 = {
  X: MAIN_WIDTH - BALL_WIDTH - 100,
  Y: 0,
};
var SPEED = {
  X: 1,
  Y: 1,
};
var DIRECTION = {
  X: 1,
  Y: 1,
};
var DIRECTION_2 = {
  X: -1,
  Y: 1,
};

var root = document.getElementById('root');
root.style.width = MAIN_WIDTH + 'px';
root.style.height = MAIN_HEIGHT + 'px';

// ball 1
var ball1 = document.createElement('div');
ball1.style.backgroundColor = 'black';
ball1.style.position = 'absolute';
ball1.style.cursor = 'pointer';
ball1.style.width = BALL_WIDTH + 'px';
ball1.style.height = BALL_WIDTH + 'px';
ball1.style.left = POSITION.X + 'px';
ball1.style.top = POSITION.Y + 'px';

// ball 2
var ball2 = document.createElement('div');
ball2.style.backgroundColor = 'red';
ball2.style.position = 'absolute';
ball2.style.cursor = 'pointer';
ball2.style.width = BALL_WIDTH + 'px';
ball2.style.height = BALL_WIDTH + 'px';
ball2.style.left = POSITION_2.X + 'px';
ball2.style.top = POSITION_2.Y + 'px';

// offset function
function distanceBetweenElements(elementOne, elementTwo) {
  const x1 = elementOne.offsetTop;
  const y1 = elementOne.offsetLeft;
  const x2 = elementTwo.offsetTop;
  const y2 = elementTwo.offsetLeft;

  const xDistance = x1 - x2;
  const yDistance = y1 - y2;

  const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

  return distance;
}

function changePositions() {
  // ball 1
  if (POSITION.X + BALL_WIDTH <= MAIN_WIDTH) {
    POSITION.X = POSITION.X + SPEED.X * DIRECTION.X;
    ball1.style.left = POSITION.X + 'px';
  }

  if (POSITION.X + BALL_WIDTH >= MAIN_WIDTH || POSITION.X <= 0) {
    DIRECTION.X = DIRECTION.X * -1;
  }

  if (POSITION.Y + BALL_WIDTH <= MAIN_HEIGHT) {
    POSITION.Y = POSITION.Y + SPEED.Y * DIRECTION.Y;
    ball1.style.top = POSITION.Y + 'px';
  }

  if (POSITION.Y + BALL_WIDTH >= MAIN_HEIGHT || POSITION.Y <= 0) {
    DIRECTION.Y = DIRECTION.Y * -1;
  }

  // ball 2
  if (POSITION_2.X + BALL_WIDTH <= MAIN_WIDTH) {
    POSITION_2.X = POSITION_2.X + SPEED.X * DIRECTION_2.X;
    ball2.style.left = POSITION_2.X + 'px';
  }

  if (POSITION_2.X + BALL_WIDTH >= MAIN_WIDTH || POSITION_2.X <= 0) {
    DIRECTION_2.X = DIRECTION_2.X * -1;
  }

  if (POSITION_2.Y + BALL_WIDTH <= MAIN_HEIGHT) {
    POSITION_2.Y = POSITION_2.Y + SPEED.Y * DIRECTION_2.Y;
    ball2.style.top = POSITION_2.Y + 'px';
  }

  if (POSITION_2.Y + BALL_WIDTH >= MAIN_HEIGHT || POSITION_2.Y <= 0) {
    DIRECTION_2.Y = DIRECTION_2.Y * -1;
  }

  // call offset function
  const spaceBetween = distanceBetweenElements(ball1, ball2);

  if (spaceBetween - BALL_WIDTH === 0) {
    DIRECTION.X = DIRECTION.X * -1;
    DIRECTION.Y = DIRECTION.Y * -1;
    DIRECTION_2.X = DIRECTION_2.X * -1;
    DIRECTION_2.Y = DIRECTION_2.Y * -1;
  }
}

let interval = setInterval(() => {
  changePositions();
}, 10);

root.appendChild(ball1);
root.appendChild(ball2);
