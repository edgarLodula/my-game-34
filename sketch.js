
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base;


function setup() {
  createCanvas(600,400);

  
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  base= new Ground(300,100,10,50)
  background("black");
  Engine.update(engine);
  drawSprites();
}

