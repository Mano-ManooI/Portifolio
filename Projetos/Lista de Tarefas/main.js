// 28/01/2025 //

const container = document.querySelector(".container")


const input = document.getElementById("task")
input.addEventListener("input", () =>{
    input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
})


function addTask(){
    const inputValue = input.value.trim()
    const task = inputValue.charAt(0).toUpperCase()+inputValue.slice(1).toLowerCase()
    
    if(task === ""){
        const info = document.getElementById("info")
        info.textContent = "Insira algo válido!"
        setTimeout(() => {
            info.textContent = ""
        }, 2000);
    }else{
        const list = document.getElementById("list")
        const li = document.createElement("li")
        li.textContent = task
        const buttonRemove = document.createElement("button")
        buttonRemove.addEventListener("click", () =>{
            list.removeChild(li)
        })
        const img = document.createElement("img")
        img.src = "./img/Lixeira.png"
        buttonRemove.appendChild(img)
        li.appendChild(buttonRemove)
        list.appendChild(li)
    }


    input.value = ""
}