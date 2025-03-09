const input = document.getElementById("number")

const playButton = document.getElementById("play")
function toggleButtonState(){
    if(input.value === ""){
        playButton.classList.add("disabled")
        playButton.disabled = true
    }else{
        playButton.classList.remove("disabled")
        playButton.disabled = false
    }
}


input.addEventListener("input", () =>{
    input.value = input.value.replace(/[^0-9]/g, "")
    
    if(input.value.length > 3){
        input.value = input.value.slice(0, 3)
    }else if(parseInt(input.value, 10) > 100){
        input.value = 100
    }else if(input.value == "0"){
        input.value = ""
    }

    toggleButtonState()
})

const randomNumber = Math.floor(Math.random() * 100) + 1

function play(){
    const numberPlayer = parseInt(input.value, 10)
    
    const info = document.getElementById("info")
    if(randomNumber === numberPlayer){
       window.location.href = "/winner/winner.html"
    }else{
        if(randomNumber > numberPlayer){
            info.innerText = "Maior que " + numberPlayer
        }else{
            info.innerText = "Menor que " + numberPlayer
        }
    }

    input.value = ""
    toggleButtonState()
}

playButton.addEventListener("click", play)
toggleButtonState()