function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(000);rect(25,25, frameCount/10,50);
    
    circle(25,400-frameCount/5,10+frameCount/20);  rect(frameCount % 400, 25,50,50)
  }