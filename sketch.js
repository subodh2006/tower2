const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
 var holder,ball,ground;
  var stand1,stand2;
   var polygon1;
    var slingShot;
     var polygon_img;
     var box1;
     var chain1;

 function preload(){
    //polygon_img=loadImage("polygon.png"); 
  }

  function setup(){
    var canvas = createCanvas(700,700);
     engine = Engine.create();
      world = engine.world;

  polygon1 = new Polygon(100,200,0.2);

    //polygon.addImage(polygon_img);
    polygon1.scale = 2;
    
    //polygon1 = Bodies.circle(50,200,20);
   // World.add(world,polygon1);

   // box1 = new Box(200,200,20,20);

    chain1 = new Chain(polygon1.body,{x:100,y:200});
    
  }

  function draw(){
    background("lightblue");
    Engine.update(engine);
    chain1.display();
   // box1.display();
    polygon1.display();

    drawSprites();
  }