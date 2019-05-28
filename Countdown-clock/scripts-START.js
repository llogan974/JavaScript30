// Create the universal variable that lives in the window. 
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');


function timer(seconds) {
    // Date.now is a new function, will give time in MS.
    const now = Date.now();

    // Find time in SECONDS by multiplying by 1000
    const then = now + seconds * 1000;

    // Run another function as soon as this function is invoked
    displayTimeLeft(seconds);

    // Show the end time, another function below. 
    displayEndTime(then);

    // Set this function to the variable that lives int he browser. 
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check when it is done. 
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        //display it
        displayTimeLeft(secondsLeft);

    }, 1000);
}

// Timer defaults to skipping first second. This function adds in the first second. 
function displayTimeLeft(seconds) {
    // Round seconds to whole numbers
    const minutes = Math.floor(seconds / 60);
    // Get the number of whole seconds remaining
    const remainderSeconds = seconds % 60;
    // Check if display needs a leading 0, if there is less than 10 seconds. so, '9' will display as '09'
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    //Change title of document to be the seconds left
    document.title = display;
    timerDisplay.textContent = display;

    console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    // Pass in the timestamp, which has all of the info below built in
    const end = new Date(timestamp);

    // Extract hours and minutes from the timestamp
    const hour = end.getHours();
    const minutes = end.getMinutes();

    // Display the time.
    // Check if past 12 noon, subtract 12 hours (not military time)
    // Check if less than 10 minutes. '9' becomes '09'
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}