//Description: Build a Work Day Sheduler that records and stores your weekly plans. 
//Features
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
var hourBlocks = document.querySelectorAll(".time");

// Use Textarea for selector and hard code it to 
//Make updates
for (var i=0; i<hourBlocks.length; i++){
  var currentTime = moment().format("H");
  var currentBlockTime = hourBlocks[i].getAttribute("id").substr(1);
   console.log(currentBlockTime);
 

   if (parseInt(currentTime) > parseInt(currentBlockTime)){//Past

    var textAreaColor = document.getElementById("h"+currentBlockTime);
    textAreaColor.classList.add("past");
                        
                          
  } else if (parseInt(currentTime) < parseInt(currentBlockTime)){//Future
    var textAreaColor = document.getElementById("h"+currentBlockTime);
    textAreaColor.classList.add("future");


  } else { //Present
   
    var textAreaColor = document.getElementById("h"+currentBlockTime);
    textAreaColor.classList.add("present"); 
    
  }
  
}


var buttonEl = document.getElementsByClassName("saveBtn")


for (var i = 0; i < buttonEl.length; i++) {
    
  buttonEl[i].addEventListener("click", function(event) {
    event.preventDefault();
    
    
     var saveText = event.target.parentElement.previousElementSibling.value;
     var storageKey = event.target.parentElement.previousElementSibling
   
  
     localStorage.setItem("planner-text-"+ storageKey.classList[2], saveText);

    
 });

 };


 for (var i=0; i<9; i++){
  var text = localStorage.getItem("planner-text-"+(i+9));
  $("#h"+(i+9)).val(text);
 }



