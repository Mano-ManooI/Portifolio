const imgManoManooI = document.getElementById("ManoManooILink");
imgManoManooI.addEventListener("click", (event) =>{
    event.preventDefault();

    window.open("https://github.com/Mano-ManooI");
});

const inputTask = document.getElementById("task");
inputTask.addEventListener("inputTask", () =>{
    inputTask.value = inputTask.value.replace(/[^A-ZA-zÀ-ú\s]/g, "");
});

function toDoList(){
    if(inputTask.value.trim() === ""){
        return;
    };

    let task = inputTask.value.trim();
    task = task.charAt(0).toUpperCase() + task.slice(1).toLowerCase();

    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.innerText = task;
    list.appendChild(li);
    const removeTask = document.createElement("button");
    removeTask.innerHTML = `
        <img src="./img/lixeira 1.png" draggable="false" id="trash1">
        <img src="./img/lixeira 2.png" draggable="false" id="trash2">
    `;
    removeTask.addEventListener("click", () =>{
        li.remove();
    });
    li.appendChild(removeTask);

    inputTask.value = "";
};

const buttonAddTask = document.getElementById("addTask");
buttonAddTask.addEventListener("click", (event) =>{
    event.preventDefault();

    toDoList();
});
inputTask.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        toDoList();
    };
});