const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world;
var engine;
var sling;
var tree, treeimg;
var player,playerimg;
var stone, stoneimg;
var mango, mangoimg;
var ground;
function preload()
{
	treeimg = loadImage("Treeimg.png");

	stoneimg = loadImage("Stoneimg.png");

	playerimg = loadImage("Playerimg.png");

	mangoimg = loadImage("Mangoimg.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(780,590,2000,20);
	tree = new Tree(950,390,400,400);
	player = new Player(140,530,230,230);
	stone = new Stone(110,550,20,20);
	sling = new Slingshot(stone.body,{x:100,y:485});
	mango1 = new Mango(800,370,60,60);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  ground.display();
  tree.display();
  player.display();
  stone.display();
  sling.display();
  mango1.display();

  if (stone.x - mango1.x < mango1.width/2 + stone.width/2 
	&& mango1.x - stone.x < mango1.width/2 + stone.width/2) {
		Matter.Body.setStatic(mango1.body,false);
	}

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	sling.fly();
}

function keyPressed() {
	if (keyCode == 32) {
		slingShot.attach(ball);
}
}


/*function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPositon = lstone.body.position

	var distance= dist(stoneBodyPositon.x, stoneBodyPositon.y, mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}*/