const input1 = document.getElementById("height");
const input2 = document.getElementById("weight");

function config(){
    const page1 = document.getElementById("page1");
    page1.style.display = "none";
    const page2 = document.getElementById("page2");
    page2.style.display = "block";
    const resultPage = document.getElementById("resultPage");
    const loading = document.getElementById("loading");
    setInterval(() => {
        if(loading.innerText.length < 13){
            loading.innerText += ".";
        }else{
            loading.style.display = "none";
            resultPage.style.display = "block";
        }
    }, 350);
};

function calculateIMC(){
    const height = parseFloat(input1.value);
    const weight = parseFloat(input2.value);

    const imc = weight / (height**2);
    const imcResult = document.getElementById("result");

    if(imc < 18.5){
        imcResult.innerHTML = `Você está <b>abaixo do peso</b>!`;
        imcResult.querySelector("b").style.color = "#f11818";
    }else if(imc >= 18.5 && imc < 24.9){
        imcResult.innerHTML = `Você está com o <b>peso ideal</b>!`;
        imcResult.querySelector("b").style.color = "#17d305";
    }else if(imc >= 25 && imc < 29.9){
        imcResult.innerHTML = `Você está com <b>sobrepeso</b>!`;
        imcResult.querySelector("b").style.color = "#dad612";
    }else if(imc >= 30 && imc < 34.9){
        imcResult.innerHTML = `Você está com <b>obesidade grau 1</b>!`;
        imcResult.querySelector("b").style.color = "#ff8c00";
    }else if(imc >= 35 && imc < 39.9){
        imcResult.innerHTML = `Você está com <b>obesidade grau 2</b>!`;
        imcResult.querySelector("b").style.color = "#ff5500";
    }else if(imc >= 40){
        imcResult.innerHTML = `Você está com <b>obesidade grau 3</b>!`;
        imcResult.querySelector("b").style.color = "#f11818";
    };
};

window.addEventListener("DOMContentLoaded", () =>{
    input1.addEventListener("input", () => {
        let value = input1.value;
        value = value.replace(/[^0-9,.]/g, "");
        
        const firstIndex = value.search(/[.,]/);
        if(firstIndex !== -1){
            const partBefore = value.slice(0, firstIndex + 1);
            const partAfter = value.slice(firstIndex + 1);

            value = partBefore + partAfter.replace(/[.,]/g, "");
            value = value.replace(/,/g, ".");
        };
        
        if(Number(value) > 3.5){
            value = "3.5";
        };

        if(value[0] === "."){
            value = `0${value}`;
        };
        
        input1.value = value.slice(0, 4);
    });
    
    input2.addEventListener("input", () =>{
        let value = input2.value;
        value = value.replace(/[^0-9,.]/g, "");
        
        const firstIndex = value.search(/[.,]/);
        if(firstIndex !== -1){
            const partBefore = value.slice(0, firstIndex + 1);
            const partAfter = value.slice(firstIndex + 1);

            value = partBefore + partAfter.replace(/[.,]/g, "");
            value = value.replace(/,/g, ".");
        };
        
        if(Number(value) > 300){
            value = "300";
        };

        if(value[0] === "."){
            value = `0${value}`;
        };
        
        input2.value = value.slice(0, 6);
    });
    const calcButton = document.getElementById("calcButton");
    calcButton.addEventListener("click", () => {
        if(input1.value && input2.value){
            config();
            calculateIMC();
        }else{
            return;
        };
    });

    const cleanInput = document.getElementById("cleanInput");
    cleanInput.addEventListener("click", () =>{
        input1.value = "";
        input2.value = "";
    });
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () =>{
        window.location.reload();
    });
});