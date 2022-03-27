
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it 

function colorOfTimeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));
        console.log(currentHour, hour);
        console.log(this);

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};



//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, description);
});

//WHEN I refresh the page
//THEN the saved events persist

function Planner() {
    $("#9 .description").val(localStorage.getItem("9 AM"));
    $("#10 .description").val(localStorage.getItem("10 AM"));
    $("#11 .description").val(localStorage.getItem("11 AM"));
    $("#12 .description").val(localStorage.getItem("12 PM"));
    $("#13 .description").val(localStorage.getItem("1 PM"));
    $("#14 .description").val(localStorage.getItem("2 PM"));
    $("#15 .description").val(localStorage.getItem("3 PM"));
    $("#16 .description").val(localStorage.getItem("4 PM"));
    $("#17 .description").val(localStorage.getItem("5 PM"));
}
colorOfTimeBlock();
Planner();
