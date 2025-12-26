const input = document.getElementById("input");
addEventListener("input", () =>{
    input.value = input.value.replace(/[^A-Za-zÀ-ú\s]/g, "");

    const maxLength = 45;
    if(input.value.length > maxLength){
        input.value = input.value.slice(0, maxLength);
    };
});

function configPrizeDraw(){
    if(input.value.trim() === ""){
        return;
    };

    let data = input.value.trim();
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();

    const items = document.getElementById("items");
    const li = document.createElement("li");
    const buttonRemove = document.createElement("button");

    li.innerText = data;
    items.appendChild(li);
    buttonRemove.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    li.appendChild(buttonRemove);
    buttonRemove.addEventListener("click", () =>{
        li.remove();
    });

    input.value = "";
};

const addData = document.getElementById("addData");
addData.addEventListener("click", (event) =>{
    event.preventDefault()

    configPrizeDraw();
});
input.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        configPrizeDraw();
    };
});