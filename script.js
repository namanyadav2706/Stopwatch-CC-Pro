// set the initial timer values
let seconds = 0;
let tens = 0;
let mins = 0;

// get the minute, second and microsecond tags
let get_Seconds = document.querySelector('.seconds');
let get_Tens = document.querySelector('.ms');
let get_Mins = document.querySelector('.minutes');

// get the button tags
let btn_Start = document.querySelector('.start-button');
let btn_Stop = document.querySelector('.stop-button');
let btn_Reset = document.querySelector('.reset-button');

let reset;

// add click event listenor to the buttons

//for start button
btn_Start.addEventListener('click', () => {
    clearInterval(reset);
    reset = setInterval(startTimer, 10);
})

// for stop button
btn_Stop.addEventListener('click', () => {
    clearInterval(reset);
})

// for reset button
btn_Reset.addEventListener('click', () => {
    clearInterval(reset);
    //set everything to zero
    tens = '00';
    seconds = '00';
    mins = '00';
    get_Seconds.innerHTML = seconds;
    get_Tens.innerHTML = tens;
    get_Mins.innerHTML = mins;
})


// callback function for start button event listenor
function startTimer(){
    tens++;
    // if microseconds are less than 9 
    if(tens <= 9){
        get_Tens.innerHTML = '0' + tens;
    }

    // if microseconds are greater than 9 
    if(tens > 9){
        get_Tens.innerHTML = tens;
    }

    // if microseconds are greater than 99, add 1 to seconds and set ms to 0 again
    if(tens > 99){
        seconds++;
        get_Seconds.innerHTML = '0' + seconds;
        tens = 0;
        get_Tens.innerHTML = '0' + 0;
    }

    // if seconds are greater than 9, start the 2nd digit of seconds
    if(seconds > 9){
        get_Seconds.innerHTML = seconds;
    }

    // if seconds are greater than 59 , add 1 to minutes and set seconds to 0 again 
    if(seconds > 59){
        mins++;
        get_Mins.innerHTML = '0' + mins;
        seconds = 0;
        get_Seconds.innerHTML = '0' + 0;
    }

    // if minutes are greater than 9, start the 2nd digit of minutes
    if(mins > 9){
        get_Seconds.innerHTML = mins;
    }
}












