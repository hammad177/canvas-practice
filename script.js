/** @format */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Animation 1 - Ball hit the wall

// const circle = {
//   x: 200,
//   y: 100,
//   size: 30,
//   dx: 3,
//   dy: 2
// };

// function drawCircle() {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = 'purple';
//   ctx.fill();
// }

// function animate() {
//   ctx.clearRect(0, 0, 500, 500);
//   drawCircle();

//   // change position
//   circle.x += circle.dx;
//   circle.y += circle.dy;

//   // Detect side walls

//   if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//     circle.dx *= -1;
//   }

//   //Dectet bottom walls

//   if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
//     circle.dy *= -1;
//   }

//   requestAnimationFrame(animate);
// }

// animate();

// Animation 2 - Character

const image = document.getElementById('char');

const player = {
  w: 100,
  h: 150,
  x: 20,
  y: 200,
  speed: 7,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  wallDetection();
}

function wallDetection() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  //Right wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Up wall
  if (player.y < 0) {
    player.y = 0;
  }

  //Down wall
  if (player.y + player.h > canvas.width) {
    player.y = canvas.width - player.h;
  }
}

function update() {
  clear();

  drawPlayer();

  newPos();

  requestAnimationFrame(update);
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function keyDown(e) {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Letf') {
    moveLeft();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key === 'ArrowRight' ||
    e.key === 'ArrowLeft' ||
    e.key === 'ArrowDown' ||
    e.key === 'ArrowUp' ||
    e.key === 'Up' ||
    e.key === 'Right' ||
    e.key === 'Left' ||
    e.key === 'Down'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);

document.addEventListener('keyup', keyUp);
