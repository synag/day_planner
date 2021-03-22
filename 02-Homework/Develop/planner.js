//Description: Build a Work Day Sheduler that records and stores your weekly plans. 
//Features



document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
 
var hourBlocks = document.querySelectorAll(".hour");


for ( var i =0; i<hourBlocks.length; i++){
  var currentTime = moment().format("H");
  var currentBlockTime = hourBlocks[i].innerText;
  var currentBlock24 = moment(currentBlockTime, "h A").format("H")
  console.log(currentBlock24);
  
  
  if (currentTime > currentBlock24){//Past

    //find value and set id to past
    var textArea = document.getElementsByClassName(currentBlock24)
    console.log(textArea)
    // var hourTextArea1 = document.getElementsByTagName("textarea")[i];
    // var att = document.createAttribute("class");  
    // // console.log(hoursBlock.children[0])
    //    // Get the first <h1> element in the document
    // var att = document.createAttribute("id");       // Create a "class" attribute
    // att.value = [10-i];                           // Set the value of the class attribute
    // hourTextArea1.setAttributeNode(att);                          // Add the class attribute to <h1>
  
    
  } else if (currentTime < currentBlock24){//Future
    var textArea = document.getElementsByClassName(currentBlock24)
    console.log(textArea)
    
  } else { //Present
    
    var textArea = document.getElementsByClassName(currentBlock24)
    console.log(textArea)
    
  }

//   setAttribute("class", ) //add.class 
  // convert currentBlockTime to 24 hr format
  
  // compare currentBlockTime to the currentTime from moment
  
  // add past, present, future depending on the comparisons
  
  
}




//Save plans in local storage (Store Item)
//localStorage.setItem("plans","value);



//Display plans on html after refresh (Get Item)
//Color changes based on past, present, and future (Set Attribute)(Need to compate time )