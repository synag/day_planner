//Description: Build a Work Day Sheduler that records and stores your weekly plans. 
//Features
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
var hourBlocks = document.querySelectorAll(".time");

// Use Textarea for selector and hard code it to 
//Make updates
for (var i=0; i<hourBlocks.length; i++){
  var currentTime = moment().format("H");
  var currentBlockTime = hourBlocks[i].getAttribute("id");
  console.log(currentBlockTime);

   if (currentTime > currentBlockTime){//Past

    //find value and set id to past  -NOT FINISHED
    var textAreaColor = document.getElementById(currentBlockTime)
    var newID = document.createAttribute("id");
    newID.value = "past";                          
    textAreaColor.setAttributeNode(newID);                         
                            
    
  } else if (currentTime < currentBlockTime){//Future
    var textAreaColor = document.getElementById(currentBlockTime)
    var newID = document.createAttribute("id");
    newID.value = "future";                          
    textAreaColor.setAttributeNode(newID);   

  } else { //Present
   
    var textAreaColor = document.getElementById(currentBlockTime)
    var newID = document.createAttribute("id");
    newID.value = "present";                          
    textAreaColor.setAttributeNode(newID);    
     
    
  }
  
}

// save to local storage (NOT FINISHED)
var buttonEl = document.getElementsByClassName("saveBtn")
var textEl =document.querySelectorAll("textarea")
//Loops through all the button click
for (var i = 0; i < buttonEl.length; i++) {
    
  buttonEl[i].addEventListener("click", function(event) {
    var saveText = event.value.previousElementSibling.innerText;
    localStorage.setItem("planner-text",saveText);
    console.log(saveText)
 });


 }
// //Display plans on html after refresh (Get Item)
// //Color changes based on past, present, and future (Set Attribute)(Need to compate time )