var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particle; 
var particles=[];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
text("Score : "+score,20,30);
  Engine.update(engine);
  text("5000",20,750)
  text("5000",100,750)
  text("5000",180,750)
  text("5000",260,750)
  text("200",340,750)
  text("200",420,750)
  text("200",500,750)
  text("100",580,750)
  text("100",660,750)
  text("100",740,750)
  push()
  strokeWeight(4)
  stroke("yellow")
  line(0,500,800,500)
  pop()
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
   }
   if(particle !=null){
particle.display();
if (particle.body.position.y>500){
  if(particle.body.position.x>0&&particle.body.position.x<300){
    score=score+5000
    particle=null

  }

  }
}
  if(particle !=null){
    particle.display();
    if (particle.body.position.y>500){
      if(particle.body.position.x>300&&particle.body.position.x<600){
        score=score+200
        particle=null
    
      }
    }
  }
  if(particle !=null){
    particle.display();
    if (particle.body.position.y>500){
      if(particle.body.position.x>600&&particle.body.position.x<900){
        score=score+100
        particle=null
    
      }
    }
  }
}

function mousePressed(){
particle= new Particle(mouseX,0,10)
}