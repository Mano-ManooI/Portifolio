const container = document.querySelector(".container")
const input_1 = document.getElementById("name")

function Leters(){
    const name = input_1.value
    const ValidValue = name.replace(/[^A-Za-zÀ-ÿ ]/g, '')

    input_1.value = ValidValue
}

function EnterUser(){
    const input_2 = document.getElementById("age")
    const age = input_2.value
    let name = input_1.value.trim()
    name = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()



    if(name === "" || age === ""){
        document.getElementById("MessageError").textContent = "Preencha todos os campos corretamente!"
    }else{
        const login = document.querySelector("#login")
        if(login){
            container.removeChild(login)
        }

        const info = document.getElementById("info")
        info.textContent = "Calculando..."
        const mensagem = document.getElementById("mensagen")
        setTimeout(() => {
            info.remove()
            mensagem.innerHTML = `Seu nome é <strong>${name}</strong>`
        }, 1000);

        setTimeout(() => {
            const ButtonLocation = document.getElementById("ButtonLocation")
            const ButtonReload = document.createElement("button")
            ButtonReload.id = "ButtonReload"
            ButtonReload.textContent = "Jogar Novamente"
            ButtonLocation.appendChild(ButtonReload)
            ButtonReload.addEventListener("click", () => {
                location.reload()
            })
        }, 1500);
    }
}