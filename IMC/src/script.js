const input1 = document.getElementById("height");
const input2 = document.getElementById("weight");

const calcButton = document.getElementById("calcButton");
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
    alert("TEST")
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
        };

        if(Number(value) > 3.5){
            value = "3,5";
        };

        input1.value = value.slice(0, 4);
    });
    
    input2.addEventListener("input", () =>{
        input2.value = input2.value.replace(/[^0-9,.]/g, "");
    });

    calcButton.addEventListener("click", () => {
        config();
        calculateIMC();
    });
});