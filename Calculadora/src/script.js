let visorText = document.getElementById("visorText");
let dataVison = document.getElementById("dataVision");
let firstNumber = null;
let operator = null;
let nowValue; 

function setupCalculator(){
    const buttons1 = document.querySelectorAll(".style1");
    const buttons2 = document.querySelectorAll(".style2");

    buttons1.forEach(button => {
        button.addEventListener("dblclick", () =>{
            if(button.textContent === "C"){
                dataVison.innerText = "Vazio";
                return;
            };
        });
        button.addEventListener("click", () =>{
            nowValue = visorText.textContent || "0";
            const buttonClick = button.textContent.trim();

            if(buttonClick === "C"){
                visorText.innerText = "0";
                firstNumber = null;
                operator = null;
                return;
            };

            if(buttonClick === "±"){
                if(nowValue === "0"){
                    return;
                }else if(nowValue.startsWith("-")){
                    visorText.innerText = nowValue.replace("-", "");
                }else{
                    visorText.innerText = `-${nowValue}`;
                }
                return;
            };

            if(buttonClick === "."){
                if(nowValue.includes(".")){
                    return;
                };
            };

            if(buttonClick === "%"){
                visorText.innerText = parseInt(nowValue) / 100;
                return
            };

            if(nowValue === "0" && buttonClick !== "."){
                visorText.innerText = buttonClick;
            }else if(nowValue.length > 11){
                return;
            }else{
                visorText.innerText += buttonClick;
            };
        });
    });

    buttons2.forEach(button =>{
        button.addEventListener("click", () =>{
            nowValue = parseFloat(visorText.textContent) || 0;
            const buttonClick = button.textContent.trim();

            const getResult = () =>{
                const operations = {
                    "÷": firstNumber / nowValue,
                    "x": firstNumber * nowValue,
                    "-": firstNumber - nowValue,
                    "+": firstNumber + nowValue,
                };
                return operations[operator];
            };
                
            if(buttonClick === "="){
                if(firstNumber === null || operator === null) return;

                const result = getResult();
                if(result === undefined){
                    console.error("Operador não reconhecido: ", operator);
                    return;
                };

                const resultToVisor = result.toString().length > 11 ? result.toExponential(5) : result.toString(); 
                visorText.innerText = resultToVisor;
                dataVison.innerText = `${firstNumber} ${operator} ${nowValue} = `;
                firstNumber = null;
                operator = null;
                return;
            };

            if(firstNumber !== null && operator !== null){
                const result = getResult();
                if(result !== undefined){
                    const resultToVisor = result.toString().length > 11 ? result.toExponential(5) : result.toString();
                    visorText.innerText = resultToVisor;
                    firstNumber = result;
                }else{
                    firstNumber = nowValue;
                }
            }else{
                firstNumber = nowValue;
            };

            operator = buttonClick;
            dataVison.innerText = `${firstNumber} ${operator}`;
            visorText.innerText = "0";
        });
    });
};

setupCalculator();