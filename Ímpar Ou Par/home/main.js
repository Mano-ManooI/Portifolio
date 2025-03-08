document.querySelectorAll(".option").forEach(option =>{
    option.addEventListener("click", () =>{
        window.location.href = "../main/index.html"
    })
})

const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")

let userChoice = null

choice1.addEventListener("click", () =>{
    userChoice = "Ímpar"
    choice1.classList.add("selected")
    choice2.classList.remove("selected")
})
choice2.addEventListener("click", () =>{
    userChoice = "Par"
    choice2.classList.add("selected")
    choice1.classList.remove("selected")
})



const input = document.getElementById("number")
const play = document.getElementById("play")

const active = "active"
const disactive = "disactive"
input.addEventListener("input", () =>{
    input.value = input.value.replace(/[^0-9]/g, "")
    
    if(parseInt(input.value) > 10){
        input.value = 10
    }else if(input.value.length > 1 && input.value.startsWith("0")){
        input.value = input.value.slice(1)
    }else if(input.value === ""){
        input.value = "0"
    }
})

input.value = "0"

const choicePC = Math.floor(Math.random() * 10) + 1
console.log(choicePC)
function playGame(){
    const number = parseInt(input.value)
    const value = number + choicePC

    const result = value % 2 === 0? "Par" : "Ímpar"
}

play.addEventListener("click", playGame)