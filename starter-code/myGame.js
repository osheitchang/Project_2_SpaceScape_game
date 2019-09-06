var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var comets = [];
var points = 0;


class Spaceship {
    constructor(x,y){
        this.x = x,
        this.y = y
        this.cover = ctx.fillRect(this.x,this.y,10,10)
    }
    draw()
    {
        console.log(this)
        var ship1 = new Image()
        ship1.src = "../images/ship-03-inverted.png"
        // ctx.rotate(degrees*Math.PI/180)
        ctx.drawImage(ship1,this.x,this.y,100,100)
        
        // ctx.fillStyle = 'green'
        // ctx.fillRect(this.x,this.y,20,20)
    }
    
}


let ship = new Spaceship(canvas.width / 2, canvas.height /2)

function shoot() {
     counter = 10;
    var blast= new Image()
    blast.src = "../images/blast.png"
    ctx.drawImage(blast,ship.x+50,ship.y-counter,20,20)
    ctx.drawImage(blast,ship.x+30,ship.y-counter,20,20)
    counter+=10;
}



class Comet {
    constructor(x,y,w,h){
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
        this.random = Math.floor(Math.random()*100*Math.random()*10)
        this.radius = (this.w+this.h)/2
        this.middle = this.w/2
    }
    draw(index){
        // console.log(this)
        ctx.beginPath()
        ctx.fillStyle = 'purple'
        this.w = this.w + 0.7
        ctx.arc(this.x,this.y,this.w,0,2 * Math.PI)
        ctx.fill()
        if(this.w >= 200){
            this.w = 0;
            console.log(this)
            //delete this;
            comets.shift()
        }
    }
    collision(p1x, p1y, r1, p2x, p2y, r2) {
        var a;
        var x;
        var y;
      
        a = r1 + r2;
        x = p1x - p2x;
        y = p1y - p2y;
      
        if (a > Math.sqrt((x * x) + (y * y))) {
          return true;
        } else {
          return false;
        }
        var collision = collision(5, 500, 10, 1000, 1500, 1500);
      console.log(collision);
      }
    }
      

    // addComet() {
    //     if(comets.length %= 100 ){
    //     ctx.fillStyle = 'purple'
    //     this.w = this.w + 0.1
    //     ctx.arc(300,this.y,this.w,0,2 * Math.PI)
    //     ctx.fill()
    //     comets.push(this)
    //     }
    // }

setInterval(function(){
    // if(!collision){
    var score =0;
    score+1
// }
},1000)


setInterval(function(){
    let comet = new Comet(canvas.width *Math.random(), canvas.height*Math.random(),5)
    comets.push(comet)
},2000)

var img = new Image();
img.onload = function () {
    for (var w = 0; w < canvas.width; w += img.width) {
        for (var h = 0; h < canvas.height; h  += img.height) {
            //ctx.drawImage(img, background.x, background.y, 10000, 4000);
        }
    }
}

img.src = "../Images/spaceBackground.png";

function moveComets(){
    
}

var background = {
    x: -200,
    y: -10,
    w: 0,
    h: 0,
    moveUp: function () {
        this.y += 60
        comets.forEach(commet=>{
            commet.y += 60
        })
        //comet.y += 60
    },
    moveDown: function () {
        this.y -= 60
        comets.forEach(commet=>{
            commet.y -= 60
        })
        //comet.y -= 60
    },
    moveLeft: function () {
        this.x += 60
        comets.forEach(commet=>{
            commet.x += 60
        })
        //comet.x += 60
    },
    moveRight: function () {
        this.x -= 60
        comets.forEach(commet=>{
            commet.x -= 60
        })
        //comet.x -= 60
    },
    position: [this.x,this.y],

    draw: function(){
         for(let i=-20; i<50; i++){
            for(let j=-20; j<50; j++){
                ctx.drawImage(img,background.x+i*2000,background.y+j*1000, 2000,1000 )
            }
         }
     }
}


class Map {
    constructor(){
        this.width = 2000;
        this.length = 1000;
        this.x = background.x
        this.y = background.y
        this.images = [];
    }
    draw() {
        var img = new Image();
        img.src = "../Images/spaceBackground-copy.png";
    // ctx.drawImage(img,background.x+this.width-3,background.y, this.width,this.length )
    //   
    // ctx.drawImage(img,background.x+this.width-3,background.y+this.length-3, this.width,this.length ) 
    }

}
var map1 = new Map()




document.onkeydown = function (e) {
    // if(background.)
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
        case 32: 
            window.requestAnimationFrame(shoot)
            break;
    }
}




function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    background.draw()
    comets.forEach(comet=>{
    comet.draw()
    })
    map1.draw()
    ship.draw()
    
    console.log(background)    

     window.requestAnimationFrame(animate)
}

 window.requestAnimationFrame(animate)
