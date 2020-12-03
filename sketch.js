var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var zombie_1,zombieImage_1,zombie_2,zombieImage_2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	zombieImage_2 = loadImage("zombie_1.jpg");
	zombieImage_1 = loadImage("zombie_2.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	zombie_1 = createSprite(150,584,20,20);
	zombie_1.addImage(zombieImage_1);
	zombie_1.scale = 0.6;

	zombie_2 = createSprite(650,584,20,20);
	zombie_2.addImage(zombieImage_2);
	zombie_2.scale = 0.6;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

}

function keyPressed() {
 if (keyCode === 40) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  
	Matter.Body.setStatic(packageBody,false);
  }
}



