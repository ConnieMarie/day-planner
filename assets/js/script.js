// load everything in document before running functions
// $(document).ready(function() {
//  Display current date/day/time
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate); 


// console.log(todayDate);
 
//click event listener added to save button
$(".saveBtn").on("click", function() {
    // console.log(this);
// variables for time and description
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
// console.log(text, time);

    
//store saved content in local storage
localStorage.setItem(text, time);
   })

   
   // check current hour block
function timeTracker() {
    var hourNow = moment().hour();
    console.log(hourNow);
    //console logs current hour only when not wrapped in funtion ??
    }


    // load items from local storage to each time block 
    
// })




