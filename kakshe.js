function setup() {
    createCanvas(1000, 1000);background(000)
  }
  
  function draw() {
    ;
    var xColor=map(mouseX, 0, 400, 0, 255);
    var yColor=map(mouseY, 0, 400, 0, 255);
    fill(200,xColor,yColor);
    rect(mouseX, mouseY,50,50)
  }{        
    if (mouseIsPressed===true )
    if(mouseX<200 & mouseY>200)
      {fill("red")}
    else if(mouseX<100 & mouseY>100)
      {fill("pink")}
    else if(mouseX<50 & mouseY>50)
      {fill("blue")}
    
    
    
   
   
  }
  