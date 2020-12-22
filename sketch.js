
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,tree;

function preload()
{
	boy = loadImage("image/boy.png");
    tree = loadImage("image/tree.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,695,1400,10);
	mango1 = new Mango(1235,220,70,70);
	mango2 = new Mango(1135,180,70,70);
	mango3 = new Mango(1335,340,70,70);
	mango4 = new Mango(1070,300,70,70);
	mango5 = new Mango(1200,310,70,70);
	mango6 = new Mango(1140,310,70,70);
	mango7 = new Mango(1170,250,70,70);
	mango8 = new Mango(1270,280,70,70);
	stone = new Stone(110,530,70,70);
	sling = new Sling(stone.body,{x:120,y:535});

	Engine.run(engine);
  
}


function draw() {
  background(120);

  image(boy,60,460,300,300);
  image(tree,980,100,400,600)

  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(){
	if(stone.body.position.x>=mango1.body.position.x||stone.body.position.y<=mango1.body.position.y){
		Body.setStatic(mango1.body,false);
	}
	if(stone.body.position.x>=mango2.body.position.x||stone.body.position.y<=mango2.body.position.y){
		Body.setStatic(mango2.body,false);
	}
	if(stone.body.position.x>=mango3.body.position.x||stone.body.position.y<=mango3.body.position.y){
		Body.setStatic(mango3.body,false);
	}
	if(stone.body.position.x>=mango4.body.position.x||stone.body.position.y<=mango4.body.position.y){
		Body.setStatic(mango4.body,false);
	}
	if(stone.body.position.x>=mango5.body.position.x||stone.body.position.y<=mango5.body.position.y){
		Body.setStatic(mango5.body,false);
	}
	if(stone.body.position.x>=mango6.body.position.x||stone.body.position.y<=mango6 .body.position.y){
		Body.setStatic(mango6.body,false);
	}
	if(stone.body.position.x>=mango7.body.position.x||stone.body.position.y<=mango7.body.position.y){
		Body.setStatic(mango7.body,false);
	}
	if(stone.body.position.x>=mango8.body.position.x||stone.body.position.y<=mango8.body.position.y){
		Body.setStatic(mango8.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone.body,{x:110,y:530});
		sling.attach(stone.body);
	}
}
