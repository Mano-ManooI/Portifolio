const visor = document.getElementById("visor");
visor.innerText = "0";

const buttons = document.querySelectorAll("button");
function confgButtons(button){
    const clickUser = button.innerText;
    const nowValue = visor.innerText;

    if(clickUser === "C"){
        visor.innerText = "0";
    }else if(nowValue === "0"){
        if(clickUser === "0"){
            visor.innerText = "0";
        }else{
            visor.innerText = clickUser;
        };
    }else if(clickUser === ""){
        

    }else{
        visor.innerText += clickUser
    }
};


window.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault();

    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            confgButtons(button);
        });
    });
});