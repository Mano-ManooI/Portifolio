const inputHour = document.getElementById("inputHours");
const inputMinute = document.getElementById("inputHMinutes");
const inputSecond = document.getElementById("inputSeconds");

function timer(){
    
};

window.addEventListener("DOMContentLoaded", () =>{

    const startTimerButton = document.getElementById("startTimerButton");
    startTimerButton.addEventListener("click", () =>{
        timer();
    });
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => window.location.reload())
});