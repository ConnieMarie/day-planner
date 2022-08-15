// load everything in document before running functions
$(document).ready(function() {
//  Display current date
var todayDate = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").html(todayDate) 
 
//click event listener added to save button
$(".saveBtn").on("Click", function(event) {
// variables for time and description
var text = $(this).sibling("description").val();
var time = $(this).parent().attr("id");
    
//store saved content in local storage
localStorage.setItem(text, time);
   });

   

})


