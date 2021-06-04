
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var	ground,paper,dustbin1, dustbin2, dustbin3, dustbinImage;

function preload() {
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20)
	paper  = new Paper(200,450,40)
	dustbin1 = new Dustbin(1200,600,20,100)
	dustbin2 = new Dustbin(1300,650,200,20)
	dustbin3 = new Dustbin(1400,600,20,100)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
  drawSprites();
  imageMode(CENTER)
  image(dustbinImage,1300,540,250,300)
}
  function keyPressed() 
  { if (keyCode === UP_ARROW){ 
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80}); } }