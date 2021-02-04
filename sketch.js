var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;

function preload(){ music = loadSound("music.mp3"); }

function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100, 580, 185, 25);
    surface1.shapeColor = "orange";
    surface1.debug = true;

    surface2 = createSprite(300, 580, 185, 25);
    surface2.shapeColor = "red";
    surface2.debug = true;

    surface3 = createSprite(500, 580, 185, 25);
    surface3.shapeColor = "green";
    surface3.debug = true;

    surface4 = createSprite(700, 580, 185, 25);
    surface4.shapeColor = "blue";
    surface4.debug = true;

    box = createSprite(random(400, 300));
    box.shapeColor = "white";
    box.scale = 0.3;
    box.velocityY = 4;
    box.velocityX = 4;
    box.debug = true;
}

function draw() {
    background("black");

    edges = createEdgeSprites();
    music.play();

     
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "orange";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        surface3.shapeColor = "pink";
        box.shapeColor = "pink";
        box.velocityY = 0;
        box.velocityX = 0;
        surface1.shapeColor = "purple";
        surface2.shapeColor = "purple";
        surface4.shapeColor = "purple";
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue"
    }
    
    box.bounceOff(edges);
    drawSprites();
}
