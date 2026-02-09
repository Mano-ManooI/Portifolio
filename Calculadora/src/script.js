const visor = document.getElementById("visor");
visor.innerText = "0";

const buttons = document.querySelectorAll("button");
function confgButtons(button){
    const clickUser = button.innerText;
    const nowValue = visor.textContent;

    if(clickUser === "C"){
        visor.innerText = "0";
        return;
    }else if(clickUser.trim() === ""){
        if(nowValue.length <= 1 || nowValue === "0"){
            visor.innerText = "0";
            return;
        }else{
            visor.innerText = visor.innerText.slice(0, -1);
        };
    }else if(nowValue === "0"){
        if(clickUser === "0"){
            visor.innerText = "0";
            return;
        }else{
            visor.innerText = clickUser;
        };
    }else if(visor.textContent.length >= 11) {
        return;
    }else{
        visor.innerText += clickUser;
    };
};

window.addEventListener("DOMContentLoaded", () =>{
    buttons.forEach(button =>{
        button.addEventListener("click", (e) =>{
            e.preventDefault();

            confgButtons(button);
        });
    });
});