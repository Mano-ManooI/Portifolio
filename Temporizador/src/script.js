const input = document.querySelectorAll("input");
const inputHour = document.getElementById("inputHours");
const inputMinute = document.getElementById("inputHMinutes");
const inputSecond = document.getElementById("inputSeconds");
inputHour.value = "00";
inputMinute.value = "00";
inputSecond.value = "00";

function decreaseTimer(){
    let h = parseInt(inputHour.value);
    let m = parseInt(inputMinute.value);
    let s = parseInt(inputSecond.value);

    if(h === 0 && m === 0 && s === 0){
        window.location.reload();
    };

    if(s > 0){
        s--;
    }else if (m > 0) {
        s = 59;
        m--;
    }else if (h > 0){
        s = 59;
        m = 59;
        h--;
    };

    const toHours = document.getElementById("toHours");
    const toMinutes = document.getElementById("toMinutes");
    const toSeconds = document.getElementById("toSeconds");

    toHours.innerText   = String(h).padStart(2, "0");
    toMinutes.innerText = String(m).padStart(2, "0");
    toSeconds.innerText = String(s).padStart(2, "0");

    inputHour.value   = String(h).padStart(2, "0");
    inputMinute.value = String(m).padStart(2, "0");
    inputSecond.value = String(s).padStart(2, "0");
};

window.addEventListener("DOMContentLoaded", () =>{
    input.forEach((input) =>{
        input.addEventListener("input", () =>{
            input.value = input.value.replace(/[^0-9]/g, "");
            if(input.value.length > 2){
                input.value = input.value.slice(0,2);
            };

            if(input !== inputHour && input.value !== "" && parseInt(input.value) > 59){
                input.value = "59";
            };
        });
        let saveValue = "";
        input.addEventListener("click", () =>{
            if(input.value !== "00"){
                saveValue = input.value;
            };
            input.value = "";
        });
        input.addEventListener("blur", () =>{
            if(input.value === ""){
                if(saveValue === ""){
                    input.value = "00";
                }else{
                    input.value = saveValue;
                };
            }else if(input.value === "0"){
                input.value = "00";
            }else if(input.value.length === 1){
                input.value = "0" + input.value;
            };
        });
    });

    const startTimerButton = document.getElementById("startTimerButton");
    let timer;
    startTimerButton.addEventListener("click", () =>{
        if(inputHour.value !== "00" || inputMinute.value !== "00" || inputSecond.value !== "00"){
            clearInterval(timer);
            decreaseTimer();
            timer = setInterval(decreaseTimer, 1000);
        };
    });
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => window.location.reload());
});