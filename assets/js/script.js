//  Display current date/day/time
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate); 

var hourBlock = $(".time-block")


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
    // console.log(hourNow);

    //loop over each hour
    for (var i = 0; i < hourBlock.length; i++) {
       console.log(hourBlock[1]) // **logging only 9amBlock and assigning class .future
        
    // determine if time block is in the past, present, or future/assign classes accordingly
    if (hourNow > hourBlock) {
        $(hourBlock).removeClass(".present");
        $(hourBlock). removeClass(".future");
        $(hourBlock).addClass(".past");
    }
    else if (hourNow === hourBlock) {
        $(hourBlock).removeClass(".future");
        $(hourBlock).removeClass(".past");
        $(hourBlock).addClass(".present");
    }
    else {
        $(hourBlock).removeClass(".past");
        $(hourBlock).removeClass("present");
        $(hourBlock).addClass(".future");
    }
}
}
// call timeTracker function    
timeTracker();

    // load items from local storage to each time block 
    




