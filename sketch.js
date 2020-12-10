const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
    polygonImg=loadImage("polygon.png");


}
function setup(){
    var canvas=createCanvas(700,800);
    Engine.create();
    world=engine.world;
    slingshot=new SlingShot(this.polygon,{x:100,y:200});
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40);
    ground=new Ground(400,650,850,10);
    stand=new Ground(500,400,100,5);
    block1=new Box(505,410,10,10);
    block2=new Box(515,410,10,10);
    block3=new Box(525,410,10,10);
    block4=new Box(535,410,10,10);
    block5=new Box(545,410,10,10);
    block6=new Box(520,420,10,10);
    block7=new Box(530,420,10,10);
    block8=new Box(540,420,10,10);
    block9=new Box(525,430,10,10);
    block10=new Box(535,430,10,10);
    block11=new Box(530,430,10,10);


}
function draw(){
    background("lightgreen");
    Engine.update(engine);
    stand.display();
    ground.display();
    slingshot.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}