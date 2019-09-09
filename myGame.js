var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var comets = [];
var points = 10;
var lives = [1, 2, 3];
var blastArr = [];
var requestedId;
let imageX = canvas.width / 2 - 30;
let imageY = canvas.height / 2 - 50;

setInterval(function() {
  points++;
}, 2000);

class Spaceship {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  draw() {
    var ship1 = new Image();
    ship1.src = "./resources/ship-03-inverted.png";
    ctx.drawImage(ship1, this.x, this.y, 100, 100);
  }
}

let ship = new Spaceship(canvas.width / 2 - 30, canvas.height / 2 - 50);

class Blast {
  constructor() {
    this.counter = 5;
    this.img = new Image();
    img.src = "./resources/blast.png";
  }
  addCounter() {
    this.counter++;
  }
}
function shoot() {
  blastArr.push(new Blast());
  console.log(blastArr);
  var bSound = document.getElementById("blast-sound");
  bSound.play()
}

function moveBlast() {
  blastArr.forEach(blast => {
    ctx.drawImage(img, ship.x + 50, ship.y - blast.counter, 20, 20);
    ctx.drawImage(img, ship.x + 30, ship.y - blast.counter, 20, 20);
    // console.log(blast.counter);
    blast.counter += 5;
    // debugger
  });
}

class Comet {
  constructor(x, y, r, h) {
    this.circleX = x;
    this.circleY = y;
    this.r = r;
    this.h = h;
    // this.random = Math.floor(Math.random() * 100 * Math.random() * 10);
    this.radius = this.w / 2;
    this.middle = this.w / 2;
  }
  draw() {
    this.metorite = new Image()
    this.metorite.src = "./resources/metorite.png"
    ctx.drawImage(this.metorite, this.circleX, this.circleY)
    // ctx.beginPath();
    // ctx.fillStyle = "yellow";
    // // this.w = this.w + 0.7;
    // ctx.arc(this.circleX, this.circleY, this.r, 0, 2 * Math.PI);
    // ctx.fill();

    if (this.r >= 200) {
      //   this.w = 0;
      console.log(this);
      //delete this;
      comets.shift();
    }
  }

  checkCollision(r) {
    if (
      this.r ===
        Math.floor(
          Math.sqrt(
            //top left corner
            (imageX - this.circleX) ** 2 + (imageY - this.circleY) ** 2
          )
        ) ||
      this.r ===
        Math.floor(
          Math.sqrt(
            //top right corner
            (imageX + img.width - this.circleX) ** 2 +
              (imageY - this.circleY) ** 2
          )
        ) ||
      this.r ===
        Math.floor(
          Math.sqrt(
            //bottom right corner
            (imageX + img.width - this.circleX) ** 2 +
              (imageY + img.height - this.circleY) ** 2
          )
        ) ||
      this.r ===
        Math.floor(
          Math.sqrt(
            //bottom left corner
            (imageX - this.circleX) ** 2 +
              (imageY + img.height - this.circleY) ** 2
          )
        )
    ) {
      points = 0 ;
      console.log("collision");
      window.cancelAnimationFrame(animate)
    }
  }

  checkRectCollision(){
    var rect1 = {x: this.circleX, y: this.circleY, width: this.r*2, height: this.r*2}
    //var rect2 = {x: (canvas.width / 2) - 30, y: (canvas.height / 2) - 50, width: 100, height: 100}
    // canvas.width / 2 - 30, canvas.height / 2 - 50
    var rect2 = {x: (canvas.width / 2) - 30, y: (canvas.height / 2) - 50, width: 100, height: 100}

  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
      points = 0 ;
      console.log("Collision")
      window.cancelAnimationFrame(animate)

      
    // collision detected!
    }
  }
}

// let comet = new Comet(canvas.width * Math.random(),
// canvas.height * Math.random(),
// 5,
// 9);
setInterval(function() {
  var comet = new Comet(
    canvas.width * Math.random(),
    canvas.height * Math.random(),
    10,
    9
  );
  comets.push(comet);
}, 3000);

// function collision(ship, comet) {
//        console.log()

//       if (
//         (ship.x - comet.x) ** 2 + ((ship.y - comet.y) ** 2) ** 0.5 <
//         comet.w / 2
//       ) {
//         console.log(ship);
//         console.log(comet);
//         alert("Collided");
//       } else {

//       }
//     }
//     console.log(comet.w)

// addComet() {
//     if(comets.length %= 100 ){
//     ctx.fillStyle = 'purple'
//     this.w = this.w + 0.1
//     ctx.arc(300,this.y,this.w,0,2 * Math.PI)
//     ctx.fill()
//     comets.push(this)
//     }
// }

var pointsTime = sec =>
  setInterval(function() {
    var score = 0;
    score + 1;
  }, 1000);

var img = new Image();
img.onload = function() {
  for (var w = 0; w < canvas.width; w += img.width) {
    for (var h = 0; h < canvas.height; h += img.height) {
      //ctx.drawImage(img, background.x, background.y, 10000, 4000);
    }
  }
};

img.src = "./resources/spaceBackground.png";

function moveComets() {}

var background = {
  x: -200,
  y: -10,
  w: 0,
  h: 0,
  moveUp: function() {
    this.y += 60;
    comets.forEach(comet => {
      comet.circleY += 60;
    });
    //comet.y += 60
  },
  moveDown: function() {
    this.y -= 60;
    comets.forEach(comet => {
      comet.circleY -= 60;
    });
    //comet.y -= 60
  },
  moveLeft: function() {
    this.x += 60;
    comets.forEach(comet => {
      comet.circleX += 60;
    });
    //comet.x += 60
  },
  moveRight: function() {
    this.x -= 60;
    comets.forEach(comet => {
      comet.circleX -= 60;
    });
    //comet.x -= 60
  },
  position: [this.x, this.y],

  draw: function() {
    for (let i = -20; i < 50; i++) {
      for (let j = -20; j < 50; j++) {
        ctx.drawImage(
          img,
          background.x + i * 2000,
          background.y + j * 1000,
          2000,
          1000
        );
      }
    }
  }
};

document.onkeydown = function(e) {
  // if(background.)
  switch (e.keyCode) {
    case 38:
      background.moveUp();
      console.log("up", background);
      break;
    case 40:
      background.moveDown();
      console.log("down", background);
      break;
    case 37:
      background.moveLeft();
      console.log("left", background);
      break;
    case 39:
      background.moveRight();
      console.log("right ", background);
      break;
    case 32:
      window.requestAnimationFrame(shoot);
      break;
  }
};

class Map {
  constructor() {
    this.width = 2000;
    this.length = 1000;
    this.x = background.x;
    this.y = background.y;
    this.images = [];
  }
  draw() {
    var img = new Image();
    img.src = "./resources/spaceBackground-copy.png";
    // ctx.drawImage(img,background.x+this.width-3,background.y, this.width,this.length )
    //
    // ctx.drawImage(img,background.x+this.width-3,background.y+this.length-3, this.width,this.length )
  }
}
var map1 = new Map();

function gameOver(aFrame) {
  if (points <= 0) {
    
    console.log("Game Over");
    points = 1;
    ctx.fillStyle="orange"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "White";
  ctx.font = "100px Georgia";
  ctx.fillText("Game Over",140, 200);
    window.cancelAnimationFrame(aFrame)
    stop()
  }
}

var song =  document.getElementById("gameSong")


function start(){
  song.play()
  animate();
}

start()

function stop() {
  if(requestedId){
    window.cancelAnimationFrame(requestedId);
    requestedId = undefined;
  }
}

window.cancelAnimationFrame(animate)

Boolean(requestedId)



function animate() {
  let aFrame = window.requestAnimationFrame(animate); 
  requestedId= undefined;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  comets.forEach(comet => {
    comet.draw();
    comet.r++;
    comet.checkRectCollision()
    // comet.checkCollision(comet.r);
     comet.checkRectCollision()
  });
  //checkRectCollision()
  gameOver(aFrame);
  moveBlast();
  map1.draw();
  ship.draw();
  ctx.fillStyle = "White";
  ctx.font = "30px Georgia";
  ctx.fillText("Score:", 600, 40);
  ctx.fillText(points, 700, 40);
  //   

  // console.log(background)



}
