const button = document.querySelector("button")
const active = "addTaskOn"
const disactive = "addTaskOff"


const input = document.getElementById("task")
input.addEventListener("input", ()  =>{
    input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")


    if(input.value.trim() === ""){
        button.classList.add(disactive)
        button.classList.remove(active)
    }else{
        button.classList.add(active)
        button.classList.remove(disactive)
    }
})

button.addEventListener("click", () =>{
    if(button.classList.contains(active)){
        addTask()
    }
})

function addTask(){
    let task = input.value.trim()
    task = task.charAt(0).toUpperCase() + task.slice(1).toLowerCase()


    const list = document.querySelector("ul")
    const itensList = document.createElement("li")
    itensList.innerText = task
    list.appendChild(itensList)

    const removeIten = document.createElement("button")
    itensList.appendChild(removeIten)
    removeIten.addEventListener("click", () =>{
        itensList.remove()
    })

    input.value = ""
}