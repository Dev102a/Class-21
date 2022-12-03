const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;




function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

 var ball_options ={
  restitution: 0.95
 }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball) 
  ground = new Ground(200,390,400,20)
  right = new Ground(390,200,20,400)
  left = new Ground(10,200,20,400)
  top_wall = new Ground(200,10,400,20)
}
function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  right.show()
  left.show()
  top_wall.show()
  ellipse(ball.position.x, ball.position.y,20)
}
 
 function vForce(){
 Matter.Body.applyForce(ball,{})
 }

 function hForce(){

 }
