const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var playerBase,baseImg;
var player,playerImg;
var playerArcher,playerAimg;
var dartboard,dartboardimg;
var arrow,arrowimg; 

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImg = loadImage("./assets/base.png");  
  playerImg = loadImage("./assets/player.png");
  playerAimg = loadImage("./assets/playerArcher.png");
  dartboardimg = loadImage("./assets/board.png");
  arrowimg= loadImage("./assets/arrow.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  
  var options = {
     isStatic:true
  }

  playerBase=Bodies.rectangle(150,350,200,200,options);
  World.add(world,playerBase);  

  player = Bodies.rectangle(209,230,100,150,options);
  World.add(world,player);

  playerArcher=Bodies.rectangle(270,200,100,150,options);
  World.add(world,playerArcher);

  dartboard=Bodies.rectangle(870,200,100,150,options);
  World.add(world,dartboard);

  /*arrow=Bodies.rectangle(470,200,100,10);
  World.add(world,arrow);*/


}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  rectMode(CENTER);
  image(baseImg,playerBase.position.x,playerBase.position.y,200,200);
  image(playerImg,209,230,100,150);
  image(playerAimg,playerArcher.position.x,playerArcher.position.y,100,150);
  image(dartboardimg,dartboard.position.x,dartboard.position.y,100,150);
  //image(arrowimg,arrow.position.x,arrow.position.y,100,10);
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  createarrows();
}

function createarrows(){
  if( keyDown("SPACE") ){
  arrow = createSprite(470,200,100,10);
  arrow.addImage(arrowimg);
  arrow.velocityX=5;
  drawSprites();
  }
}


