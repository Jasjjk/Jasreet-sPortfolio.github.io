//global variables
let RndNumber
let userChoice
function setup() {
  createCanvas(400, 400);
   RndNumber=round(random(0.5,3.5))
   userChoice=createInput('')
  userChoice.position(100,190)
}

function draw() {
  background(220);
  frameRate(2)
  textSize(15)
  text('choose a number 1:Rock, 2:Paper, 3:Scissors', 40,125)
  

textSize(40)
text(RndNumber, 50, 100)
  text (userChoice.value(),150,250)
}     
let UC = userChoice.value();

if (RndNumber == 1)
{
  if(UC==2)
  
    text('You Won!!',150,350)
    
  
else if(UC==3)
{text('Computer Won!!',150,350)
}
  else{text("It's a tie",150,350)
}
}
else if (RndNumber == 2)
{
  if(UC==3)
  {
    text('You Won!!',150,350)
    
  }}
else if(UC==1)
{text('Computer Won!!',150,350)
}
  else{text("It's a tie",150,350)
      }




