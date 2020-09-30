
 var car,carimage1,carimage2,carimage3, carimage4,wall,wallimage;
 var speed,weight;

 function preload(){

  carimage1 = loadImage("c1.png");  

  carimage2 = loadImage("c2.png");  

  carimage3 = loadImage("c3.png");  

  carimage4 = loadImage("c4.png");  

  wallimage= loadImage("Capture.PNG");  

 }

 

 function setup(){

  createCanvas(1400,400);

  car = createSprite(50,200,50,50);
  car.addImage(carimage1);
  wall = createSprite(1300,200,60,height/2);
  //wall.addImage(wallimage);
  //wall.scale = 0.1;

  wall.setCollider("rectangle",0,0,20,20);

  car.debug = true;
  wall.debug = true;

  speed = random(55,90);
  weight = random(400,1500);
  

 }
 function draw(){

  background(0);

  
  


  car.velocityX = speed;

  
  if(wall.x - car.x  <  (car.width + wall.width)/2)
  {
   
     car.velocityX = 0;
     var deformation=0.5 * weight * speed * speed/22509;
     if(deformation>180)
     {

      car.addImage(carimage4);
     }
     
     if(deformation<180 && deformation > 100) 
     {
    
      car.addImage(carimage3);

     }
     if(deformation<100)
     {

      car.addImage(carimage2);

    }


  }

 
 


  drawSprites();
 }