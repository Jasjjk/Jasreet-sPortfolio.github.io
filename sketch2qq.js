function setup() {
    createCanvas(400, 400);
    background(220)
    
      
  }
  
  function draw() {
    
    rect(25,25, frameCount/10,50);
    
    circle(25,400-frameCount/5,10+frameCount/20);
    
    rect(frameCount % 400, 25,50,50);  if (mouseIsPressed === true){
    if(mouseX<200 & mouseY>200)
      {fill("red")}
    else if(mouseX<100 & mouseY>100)
      {fill("pink")}
    else if(mouseX<50 & mouseY>50)
      {fill("blue")}
    
    
    
   
   
  }}