
//variable for  array of names
let uName = [  ]
let uMarks = [  ]



//variable for array of marks

let uEngMarks = [ ]
let uMthMarks=[]
let uSciMarks=[]

// variable for input boxes / text boxes

let InpFName , InpEngMarks,InpMthMarks,InpSciMarks

// variable for submit button

let btnSubmit

// variable for target Slot
let targetSlot = 0


function setup() {
  createCanvas(400, 400);
 
 
  InpFName = createInput()
  InpFName.position(25, 370)
  InpFName.style("width", "120px")
 
  InpEngMarks = createInput()
  InpEngMarks.position ( 170, 370)
  InpEngMarks.style("width", "18px")
 InpMthMarks = createInput()
  InpMthMarks.position ( 200, 370)
  InpMthMarks.style("width", "18px")
 InpMarks = createInput()
  InpMarks.position ( 229, 370)
  InpMarks.style("width", "18px")
 
  btnSubmit = createButton("SUBMIT")
  btnSubmit.position( 270, 370)
  btnSubmit.style("width", "100px")
  btnSubmit.mousePressed(updateData)
 
}

function draw() {
  background(220);
 
  for(i=0; i< uMarks.length ; i++){
     
    text ( uMarks[i], 170, 25*i+30 )
        // text command
     

 
 
}
   for(i=0; i< uEngMarks.length ; i++){
     
    text ( uEngMarks[i], 150, 25*i+30 )
        // text command
     

 
 
}
   for(i=0; i< uMthMarks.length ; i++){
     
    text ( uMthMarks[i], 130, 25*i+30 )
        // text command
     

 
 
}
for(i=0; i< uName.length ; i++){
      text ( uName[i], 25, 25*i+30 )}
}


function updateData()
{
  //save the value of input box in array
  uName[targetSlot] = InpFName.value()
  uMarks[targetSlot]=
  InpMarks.value()
   uMthMarks[targetSlot]=
  InpMthMarks.value()
    uEngMarks[targetSlot]=
  InpEngMarks.value()
  //update target slot value
  targetSlot++
 
  // empty the text box
  InpFName.value("")
 InpMarks.value("")
   InpMthMarks.value("")
  InpEngMarks.value("")
}