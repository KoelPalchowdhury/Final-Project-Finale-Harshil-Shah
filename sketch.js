const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse= Matter.Mouse;
const MouseConstraint= Matter.MouseConstraint;

var Gpobj, soccer,groundObject, backGround
var world, engine;
var Mconstraint
var canvas;
var score=0;

function preload(){
backGround=loadImage("background.jpg")


}
function setup() {
	canvas= createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	GpObj=new GoalPost(1200,610);
	soccer=new Ball(200,665);
	groundObject=new Ground(700,690,width,40);
	//Create a Ground

	const mouse=Mouse.create(canvas.elt);
	const options={
		mouse:mouse,
		body:soccer
	}
	mouse.pixelRatio=pixelDensity()
	Mconstraint=MouseConstraint.create(engine,options);
	World.add(world,Mconstraint);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}



function draw() {
  background(backGround);
  
  textSize(20);
  fill("red")
  text("Score : "+score,1300,50)
  
  console.log(score)
  GpObj.display();
  soccer.display();
  groundObject.display();
  soccer.score();

  

  
}


function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(soccer.body,soccer.body.position,{x:1200,y:610});
		//Matter.Body.setStatic(soccer.body, {isStatic:true})
		
  	}
}

/*function MousePressed(){
	
		//Matter.Body.setPosition(soccer.body, {x:200,y:665})
		
	}*/
