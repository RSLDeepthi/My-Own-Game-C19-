var PLAY = 1;
var END = 0;
var gameState = PLAY;

var back,backImg;

var girl,girl_running,dnut,dnutImg,sberry, sberryImg, unicorn,unicornImg,owl,owlImg, invisibleground;

var dnutsGroup, sberrysGroup, unicornsGroup, owlsGroup;

var score, gameOver,gameOverImg;

function preload(){
  
  backImg = loadImage("backimg.png");
  girl_running =loadAnimation( "grun1.png",          "grun2.png" ,"grun3.png","grun4.png","grun5.png");
  dnutImg = loadImage("doughnut.png");
  sberryImg = loadImage("strawberry.png");
  unicornImg = loadImage("unicorn.png");
  owlImg = loadImage("owl.png");
  gameOverImg = loadImage("gameover2.png");
  
  
}
function setup() {
  createCanvas(350,400);
  
  back = createSprite(200,200,600,20); 
  back.addImage(backImg); 
  back.x = back.width /2;
  back.velocityX = -7;
  back.scale = 1.2;
  
  girl = createSprite(50,350,10,30);
  girl.addAnimation("running",girl_running);
  girl.scale = 0.3;
  
  invisibleGround = createSprite(200,390,400,10);
  invisibleGround.visible = false;
  
  gameOver = createSprite(180,200,50,50);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;
  
  dnutsGroup = new Group();
  sberrysGroup = new Group();
  
  unicornsGroup = new Group();
  owlsGroup = new Group();
  
  score = 0
}

function draw() {
  
  background("lightblue");
  
  
  
  if(gameState === PLAY){
  
    back.velocityX = -7;
  
    if (back.x < 0){
      back.x = back.width/2;
    }
  
    if(keyDown("space")&& girl.y >= 353) {
        girl.velocityY = -12;        
    }
    
    girl.velocityY = girl.velocityY + 0.8;
  
    girl.collide(invisibleGround);
  
    var select_item = Math.round(random(1,4));
  
    if (World.frameCount % 100 === 0) {
      if (select_item === 1) {
        spawnDoughnuts();
      } else if (select_item === 2) {
        spawnStrawBerries();
      } else if (select_item === 3) {
        spawnUnicorn();
      } 
      else if (select_item === 4) {
        spawnOwl();
      } 
    }
    
    if(dnutsGroup.isTouching(girl)){
        
        score = score - 2;
        dnutsGroup.destroyEach();
      
    }  
    else if(sberrysGroup.isTouching(girl)){
            
        score = score + 3;
        sberrysGroup.destroyEach();
    }
    else if(unicornsGroup.isTouching(girl)){
            
        score = score + 5;
        unicornsGroup.destroyEach();
    }
    else if(owlsGroup.isTouching(girl)){
            
        gameState = END;
        score = 0;
        owlsGroup.destroyEach();
    }
    
  
  drawSprites();
  
  
  fill("black");
  textSize(25);
  text("Score: "+ score, 150,50);
    
  }
  
  if (gameState === END){
     
      
     
     girl.destroy();
     back.velocityX = 0;
     dnutsGroup.destroyEach();
     sberrysGroup.destroyEach();  
     unicornsGroup.destroyEach();
     owlsGroup.destroyEach();
    
     gameOver.visible = true; 
    
     drawSprites(); 
     
  }
}

function spawnDoughnuts(){
  
    dnut = createSprite(350,220,40,10);
    dnut.y = Math.round(random(200,300));
    dnut.addImage(dnutImg);
    dnut.scale = 0.08;
    dnut.velocityX = -3;
    
     //assign lifetime to the variable
    dnut.lifetime = 200;
    
    //adjust the depth
    dnut.depth = girl.depth;
    girl.depth = girl.depth + 1;
    
    
    dnutsGroup.add(dnut);
     
}

function spawnStrawBerries(){
  
    sberry = createSprite(350,220,40,10);
    sberry.y = Math.round(random(200,300));
    sberry.addImage(sberryImg);
    sberry.scale = 0.1;
    sberry.velocityX = -3;
    
     //assign lifetime to the variable
    sberry.lifetime = 200;
    
    //adjust the depth
    sberry.depth = girl.depth;
    girl.depth = girl.depth + 1;
    
    sberrysGroup.add(sberry);
  
}

function spawnUnicorn(){
  
    unicorn = createSprite(350,220,40,10);
    unicorn.y = Math.round(random(200,300));
    unicorn.addImage(unicornImg);
    unicorn.scale = 0.1;
    unicorn.velocityX = -3;
    
     //assign lifetime to the variable
    unicorn.lifetime = 200;
    
    //adjust the depth
    unicorn.depth = girl.depth;
    girl.depth = girl.depth + 1;
    
    unicornsGroup.add(unicorn);
  
}

function spawnOwl(){
  
    owl = createSprite(350,220,40,10);
    owl.y = Math.round(random(200,300));
    owl.addImage(owlImg);
    owl.scale = 0.1;
    owl.velocityX = -3;
    
     //assign lifetime to the variable
    owl.lifetime = 200;
    
    //adjust the depth
    owl.depth = girl.depth;
    girl.depth = girl.depth + 1;
    
    owlsGroup.add(owl);
  
}
