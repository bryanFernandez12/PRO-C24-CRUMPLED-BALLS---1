
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		paper = new Paper(50,630, 20)
		ground = new Ground(400, 650, 800,20)
		containerLeft = new Container(550,590, 20,100)
		containerRight = new Container(700,590,20,100)
		containerCenter = new Container(625,630,130,20);
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY, mouseX, mouseY)
 paper.display(); 
 ground.display();
 containerLeft.display();
 containerRight.display();
 containerCenter.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-95})
	 }
   }

