window.addEventListener("DOMContentLoaded", () =>{
    const timer = document.getElementById("timer");
    const inputData = document.getElementById("inputData");
    const startTimerButton = document.getElementById("startTimerButton");
    startTimerButton.addEventListener("click", () =>{
        inputData.style.display = "none";
        timer.style.display = "inline-block";
    });
    
    const pauseButton = document.getElementById("pause");    
    const continueButton = document.getElementById("continue");
    pauseButton.addEventListener("click", () =>{
        pauseButton.style.display = "none";
        continueButton.style.display = "inline-block";
    });
    continueButton.addEventListener("click", () =>{
        pauseButton.style.display = "inline-block";
        continueButton.style.display = "none";
    })
});