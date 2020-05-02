var currentDay = moment().format('dddd MMMM Do YYYY' );
var currentTime = moment().hour();
var hourBlock = $(this);
var content = document.querySelector('.content');
var saveBtns = $('.saveBtn');
var storedTasks = JSON.parse(localStorage.getItem('tasks')) || {};

//prints current date to the jumbotron
$("#currentDay").append('<text>' + currentDay + '</text>' )

//associates tasks from input fields to the hour that they a typed into
function getTextInput( buttonHour ) {
    return $('#task-' + buttonHour);
}

saveBtns.each(function() {
   
    var myButtonHour = $(this).data('hour');
    var taskInput = getTextInput( myButtonHour );
    
    taskInput.val( storedTasks[ 'task' + myButtonHour ]);
       
});

//change color of textareas based on time
$(".content").each(function(){
    var timeBlock = $(this).attr("name");
    console.log(timeBlock)
    console.log(currentTime)
    if( timeBlock == currentTime) {
        $(this).addClass("present");
    }

    else if (timeBlock <= currentTime) {
          $(this).addClass("past");

    } 
    else {
        $(this).addClass("future");

    }
});

// Add new content to the tasks object when save button is clicked and saves to local storage as a JSON obj
saveBtns.on('click', function() {
     
    var buttonHour = $(this).data('hour');
    var taskInput = $('#task-' + buttonHour)
    var taskValue = taskInput.val();
       
     
    storedTasks[ 'task' + buttonHour ] = taskValue
    
    localStorage.setItem( 'tasks', JSON.stringify( storedTasks ));
    
});
   

     
 getTextInput();
