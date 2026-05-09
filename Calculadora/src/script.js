let visorText = document.getElementById("visorText");

let nowValue;

function insertNumber(){
    const buttons = document.querySelectorAll(".style1");
    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            nowValue = visorText.textContent || 0;
            const buttonClick = button.textContent;

            if (nowValue === "0"){
                visorText.innerText = buttonClick;
            }else{
                visorText.innerText += buttonClick;
            };
        });
    });
};

function otherFunctions(){
    const buttons = document.querySelectorAll(".style1");
    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            nowValue = visorText.textContent || 0;
            const buttonClick = button.textContent;

            if(buttonClick === "C"){
                visorText.innerText = "0";
            };

            if(buttonClick === "±"){
                if(nowValue === "0"){
                    return;
                }else if(nowValue.startsWith("-")){
                    visorText.innerText = nowValue.replace("-", "");
                }else{
                    if(nowValue[0] === "-"){
                        const result = nowValue.split("").filter(minus => minus !== "-").join("");
                        visorText.innerText = result;
                    };
                };
            };
        });
    });
};

insertNumber();
otherFunctions();