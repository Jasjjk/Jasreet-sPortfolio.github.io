function setup() {
    createCanvas(500, 500); background(0);
  }
  
  function draw() {
   ;noStroke()
        rect(mouseX, mouseY,50,50);
                          
  if (mouseIsPressed === true){
    if(mouseX<200 & mouseY>200)
      {fill("red")}
    else if(mouseX<150 & mouseY>150)
      {fill("pink")}
    else if(mouseX<100 & mouseY>100)
      {fill("blue")}
    else if(mouseX<50 & mouseY>50)
      {fill("rgb(255,0,215)")}
   
    
    
    
    
    
   
   
  }
    
    
   
   
  }