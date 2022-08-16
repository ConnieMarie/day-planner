//  Display current date/day/time
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate); 
var blockHour = $(".time-block");
var textBlock = $(".description");
 
//click event listener added to save button
$(".saveBtn").on("click", function() {
    
// variables for time and description
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");


    
//store saved content in local storage
localStorage.setItem(time, text);
   })

let hourBlock = blockHour.length -2
   // check current hour block
function timeTracker() {
    var hourNow = moment().hour();
   
    //loop over each hour
    for (let i = 0; i < blockHour.length; i++) {
    
    // load items from local storage to each time block 
    $(textBlock[i]).val(localStorage.getItem($(textBlock[i]).parent().attr("id")))
    console.log($(textBlock[i]).parent().parent().attr("id"))
    
    // determine if time block is in the past, present, or future/assign classes accordingly
    if (hourNow > hourBlock) {
        $(blockHour[i]).removeClass("present");
        $(blockHour[i]). removeClass("future");
        $(blockHour[i]).addClass("past");
        console.log("past");
        console.log(blockHour[i])
    }
    else if (hourNow === hourBlock) {
        $(blockHour[i]).removeClass("future");
        $(blockHour[i]).removeClass("past");                  
        $(blockHour[i]).addClass("present");
        console.log("present");
    }
    else {
        $(blockHour[i]).removeClass("past");
        $(blockHour[i]).removeClass("present");
        $(blockHour[i]).addClass("future");
        console.log("future");
    }
    hourBlock++
}
};

// }
// call timeTracker function    
timeTracker();

    




