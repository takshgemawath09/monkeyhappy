var bananaImage,obstacleImage,obstacleGroup,back ,score,ground,player,bananaGroup;


function preload(){
  
  backImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}



function setup() {
  createCanvas(400, 400);
 
  back=createSprite(200,200,400,400);
  back.addImage(backImage);
  back.velocityX=-4;
  
  ground=createSprite(0,395,800,50);
  ground.visible=false;
  
  player=createSprite(100,360,30,60);
  player.addAnimation("monkey",player_running);
  player.scale=0.12;
  player.setCollider("circle",0,0,30);
  
obstacleGroup=new Group();
bananaGroup=new Group();


  score=0;      
  console.log(player.y);
}

function draw() {
  background("white");
   
  player.collide(ground);    
  
  
    if (back.x < 0){
      back.x = back.width/2;
    }
  if(obstacleGroup.isTouching(player)){
    player.scale=0.12;
  }
    if(keyDown("space")){
      player.velocityY = -16;    
      
    }
   player.velocityY = player.velocityY + 0.8;
  
  if (bananaGroup.isTouching(player)){
     score=score+ 2;
    bananaGroup.destroyEach();   
   }
      
    switch(score){
        
      case 10: player.scale=0.12; break; 
      case 20: player.scale=0.14; break; 
      case 30: player.scale=0.16; break; 
      case 40: player.scale=0.18;break; 
      default:break; 
    } 
    
    
   spawnObstacles();
    kela();
    drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,250,50);
}


function kela() {
if (frameCount% 200 === 0) {
    var banana = createSprite(400, 270,10,10);
     banana.y = random(230,270);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=220;
    banana.velocityX=-2;
    bananaGroup.add(banana);
    
   }
}

function spawnObstacles() {
if( frameCount % 140 === 0) {

   var  obstacle = createSprite(400,370,10,40);
    obstacle.velocityX = -2; 
    
    obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
    
  }
}

