const inputTask = document.getElementById("task");
const addTask = document.getElementById("addTask");

function TaskList(){
    const task = inputTask.value.trim();
    if(task === ""){
        addTask.disabled = true;
        return;
    }
    
    const list = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);

    const removeTask = document.createElement("button");
    removeTask.innerHTML = "<i class='fa-solid fa-trash'></i>";
    removeTask.addEventListener("click", (event) =>{
        event.preventDefault();

        li.remove();
    });
    li.appendChild(removeTask);

    if(li){
        document.getElementById("taskList").style.display = "block";
    }else{
        document.getElementById("taskList").style.display = "none";
    };

    inputTask.value = "";
};

addTask.addEventListener("click", (event) =>{
    event.preventDefault();

    TaskList();
});