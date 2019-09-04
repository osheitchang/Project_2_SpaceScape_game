var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Spaceship {
    constructor(x,y){
        this.x = x,
        this.y = y
    }
    draw()
    {
        console.log(this)
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x,this.y,20,20)
    }
}

let ship = new Spaceship(canvas.width / 2, canvas.height /2)


class Comet {
    constructor(x,y,w,h){
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(){
        console.log(this)
        ctx.beginPath()
        ctx.fillStyle = 'purple'
        this.w = this.w + 0.01
        ctx.arc(this.x,this.y,this.w,0,2 * Math.PI)
        ctx.fill()
    }
}

let comet = new Comet(canvas.width / 2, canvas.height /2,5)


var img = new Image();
img.onload = function () {
    ctx.drawImage(img, background.x, background.y, 1000, 1000);
}
img.src = "../Images/spaceBackground.png";

var background = {
    x: 25,
    y: 25,
    w: 1000,
    h: 1000,
    moveUp: function () {
        this.y -= 55
        comet.y -= 55
    },
    moveDown: function () {
        this.y += 55
        comet.y += 55
    },
    moveLeft: function () {
        this.x -= 55
        comet.x -= 55
    },
    moveRight: function () {
        this.x += 55
        comet.x += 55
    },
}


document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38:
            background.moveUp();
            console.log('up', background);
            break;
        case 40:
            background.moveDown();
            console.log('down', background);
            break;
        case 37:
            background.moveLeft();
            console.log('left', background);
            break;
        case 39:
            background.moveRight();
            console.log('right', background);
            break;
    }
}




function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)

    ctx.drawImage(img, background.x, background.y, 1000, 1000);
    ship.draw()
    comet.draw()
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)



































// function start(){
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var bg = new Image();
// 
// }
// start()
// var spaceShip = {
//     x: 300,
//     y: 500,

//     fire() {
//     }
// }

// var road = {
//     x:150,
//     moveLeft: function(){
//         this.x -= 7
//     },
//     moveRight: function(){
//         this.x += 7
//     }
// }


// 

// class Component {
//     constructor(width,height){
//     this.width = width,
//     this.height = height 
// }
//     update(){

// }
// }

// function updateCanvas(){
//     clearRect(0,0,700,700)
//     draw(spaceShip)
// }

