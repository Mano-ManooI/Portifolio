const container = document.querySelector(".container")


const input1 = document.getElementById("cm")
const input2 = document.getElementById("kg")

input1.addEventListener("input", () => {
    input1.value = input1.value.replace(/[^0-9.]/g, "")
})
const parts1 = input1.value.split(".")
if(parts1.length > 2){
    input1.value = parts1[0] + "." + parts1.slice(1).join("")
}

input2.addEventListener("input", () => {
    input2.value = input2.value.replace(/[^0-9.]/g, "")
})
const parts2 = input2.value.split(".")
if(parts2.length > 2){
    input2.value = parts2[0] + "." + parts2.slice(1).join("")
}



function IMC(){
    const cm = input1.value.trim()
    const kg = input2.value.trim()
    const info = document.getElementById("info")
    const message = document.getElementById("message")
    if(cm == "" || kg == ""){
        info.textContent = "Preencha todos os campos corretamente!"
    }else{
        const ImcResult = kg/(cm * cm)
        if(ImcResult < 18.5){
            message.textContent = "Abaixo do Peso"
            message.style.color = "red"
        }else if(18.5 <= ImcResult && ImcResult <= 24.9){
            message.textContent = "Peso Normal"
            message.style.color = "green"
        }else if(25 <= ImcResult && ImcResult <= 29.9){
            message.textContent = "Sobrepeso"
            message.style.color = "blue"
        }else if(30 <= ImcResult && ImcResult <= 34.9){
            message.textContent = "Obesidade Grau I"
            message.style.color = "purple"
        }else if(35 <= ImcResult && ImcResult<= 39.9){
            message.textContent = "Obesidade Grau II"
            message.style.color = "orange"
        }else if(ImcResult >= 40){
            message.textContent = "Obesidade Grau III"
            message.style.color = "red"
        }

        const form = document.querySelector("form")
        if(form){
            container.removeChild(form)
        }

        setTimeout(() => {
            const ButtonLocation = document.getElementById("ButtonLocation")
            const ButtonReload = document.createElement("button")
            ButtonReload.textContent = "Recarregar"
            ButtonReload.addEventListener("click", () => {
                location.reload()
            })
            ButtonLocation.appendChild(ButtonReload)
        }, 1000);
    }

}