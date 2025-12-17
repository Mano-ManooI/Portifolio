const input = document.getElementById("input");
addEventListener("input", () =>{
    input.value = input.value.replace(/[^A-Za-zÀ-ú\s]/g, "");

    const maxLength = 45;
    if(input.value.length > maxLength){
        input.value = input.value.slice(0, maxLength);
    };
});

function prizeDraw(){
    if(input.value.trim() === ""){
        return;
    };

    let data = input.value.trim();
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    console.log(data)



    input.value = ""
};

const addData = document.getElementById("addData");
addData.addEventListener("click", (event) =>{
    event.preventDefault()

    prizeDraw();
});
input.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        prizeDraw();
    };
});