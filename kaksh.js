let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game ;

let RndNumber ;

// variable for text
let notes = "Welcome to My game , plz choose  your option."
let result = ""

function setup()
{
  createCanvas(600, 400);
 
  RndNumber = round ( random( 0.5, 3.5) )
 
  btnGame = createButton("Single Game")
  btnGame.position (75, 190)
  btnGame.style("width" , "100px")
  btnGame.mousePressed(showRPS)
  //btnGame.hide()
   
  btn3Game = createButton("Best Of Three")
  btn3Game.position (250, 190)
  btn3Game.style("width" , "100px")
  btn3Game.mousePressed(CompBestofThree) 
  //btn3Game.hide()
 
  btn5Game = createButton("Best of Five")
  btn5Game.position (425, 190)
  btn5Game.style("width" , "100px")
    btn5Game.mousePressed(CompBestofFive) 
  //btn5Game.hide()
 
  btnRock = createButton("Rock")
  btnRock.position (75, 190)
  btnRock.style("width" , "100px")
  btnRock.mousePressed(CompRock)
  btnRock.hide()
   
  btnPaper = createButton("Paper")
  btnPaper.position (250, 190)
  btnPaper.style("width" , "100px")
  btnPaper.mousePressed(CompPaper)
  btnPaper.hide()
 
  btnScissors = createButton("Scissors")
  btnScissors.position (425, 190)
  btnScissors.style("width" , "100px")
  btnScissors.mousePressed(CompScissors)
  btnScissors.hide()
 
}

function draw()
{
 
  background(220);
  //  increase the size of the text
 
  text("My Game Rock Paper Scissors", 220, 100)
 
  text( notes, 180, 120);
 
  text (result , 150, 300)
 
  text (RndNumber , 300, 300)
}


function showRPS()
{
  notes = "plz choose one out of Rock, paper, scissors"
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
  btnScissors.show()
  btnPaper.show()
  btnRock.show()
}

               
function CompRock()
{

   if(RndNumber == 2)
        {
         result = 'You Won !!';
         
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
 
 
}
function CompPaper()
{

   if(RndNumber == 1)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 2)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
 
 
}
function CompScissors()
{

   if(RndNumber == 3)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 1)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }}

function  CompBestofThree(){
const play = () => {
      // set Computer Choice 
      var userChoice = prompt("Do you choose rock, paper or scissors?");
      var computerChoice = Math.random();
      if (computerChoice < 0.34) {
        computerChoice = "rock";
      } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";
      }
    
      console.log("Player Choice: " + userChoice);
      console.log("Computer Choice: " + computerChoice);
    
    
      if (computerChoice === userChoice) {
        return "The result is tie!";
      }
      //little change in logic here----
    
      if (computerChoice === "rock") {
        if (userChoice === "scissors") { return "Computer wins";
        } else {
          if (userChoice === "paper")
            return "Player wins";
        }
      }
      if (computerChoice === "paper") {
        if (userChoice === "rock") {
          return "Computer wins";
        } else {
          if (userChoice === "scissors")
          return "Player wins";
      }
    }
    if (computerChoice === "scissors") {
      if (userChoice === "paper") {
        return "Computer wins";
      } else {
        if (userChoice === "rock")
          return "Player wins";
      }
    }
    };
    const round = () => {
    const res = play();
    let playerScore = 0;
    let computerScore = 0;
    console.log(res)
    cnt--
    wins[cnt] = res.startsWith("Player") ? 1 :res.includes("tie") ?-1:0;
    console.log(wins)
    if (cnt === 0) {
      const total = wins.filter((a) => a==1)
      console.log(`You beat the computer ${total.length} time${total.length===1?"":"s"}`)
      playAgain()
    }else if(cnt == 1){ // Check for every round
      var el2 = wins[2];
      var el1 = wins[1];
      if(el2 == el1 && el1!=-1){
        const total = wins.filter((a) => a==1)
        console.log(`You beat the computer ${total.length} time${total.length===1?"":"s"}`)
        playAgain()
      }
    }
    if(pa){
    setTimeout(round, 10) // else go again
    }else{
      prompt("Thank you for playing")
    }
    }
    let pa = true;
    let cnt = 1,
    wins = [];
    const mode = prompt("welcome to the game. select 2 in order to start playing");
    if (mode === '2')
      cnt = 3;
    round()
    
    function playAgain(){
      if(confirm('Do you want to play again ?')){
        pa = true
        cnt = 1
        wins = [];
        const mode = prompt("welcome to the game. select 2 in order to start playing");
        if (mode === '2') 
          cnt = 3;
    
        round()
      }else{
        pa=false
      }
    }}
function  CompBestofFive(){
const play = () => {
      // set Computer Choice 
      var userChoice = prompt("Do you choose rock, paper or scissors?");
      var computerChoice = Math.random();
      if (computerChoice < 0.34) {
        computerChoice = "rock";
      } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";
      }
    
      console.log("Player Choice: " + userChoice);
      console.log("Computer Choice: " + computerChoice);
    
    
      if (computerChoice === userChoice) {
        return "The result is tie!";
      }
      //little change in logic here----
    
      if (computerChoice === "rock") {
        if (userChoice === "scissors") { return "Computer wins";
        } else {
          if (userChoice === "paper")
            return "Player wins";
        }
      }
      if (computerChoice === "paper") {
        if (userChoice === "rock") {
          return "Computer wins";
        } else {
          if (userChoice === "scissors")
          return "Player wins";
      }
    }
    if (computerChoice === "scissors") {
      if (userChoice === "paper") {
        return "Computer wins";
      } else {
        if (userChoice === "rock")
          return "Player wins";
      }
    }
    };
    const round = () => {
    const res = play();
    let playerScore = 0;
    let computerScore = 0;
    console.log(res)
    cnt--
    wins[cnt] = res.startsWith("Player") ? 1 :res.includes("tie") ?-1:0;
    console.log(wins)
    if (cnt === 0) {
      const total = wins.filter((a) => a==1)
      console.log(`You beat the computer ${total.length} time${total.length===1?"":"s"}`)
      playAgain()
    }else if(cnt == 1){ // Check for every round
      var el2 = wins[2];
      var el1 = wins[1];
      if(el2 == el1 && el1!=-1){
        const total = wins.filter((a) => a==1)
        console.log(`You beat the computer ${total.length} time${total.length===1?"":"s"}`)
        playAgain()
      }
    }
    if(pa){
    setTimeout(round, 10) // else go again
    }else{
      prompt("Thank you for playing")
    }
    }
    let pa = true;
    let cnt = 1,
    wins = [];
    const mode = prompt("welcome to the game. select 2 in order to start playing");
    if (mode === '2')
      cnt = 5;
    round()
    
    function playAgain(){
      if(confirm('Do you want to play again ?')){
        pa = true
        cnt = 1
        wins = [];
        const mode = prompt("welcome to the game. select 2 in order to start playing");
        if (mode === '4') 
          cnt = 5;
    
        round()
      }else{
        pa=false
      }
    }}