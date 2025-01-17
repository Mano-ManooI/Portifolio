function EnterName(){
    const input = document.getElementById("name")
    let name = input.value.trim()

    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

    const main = document.querySelector("main")
    const form = document.querySelector("form")
    const title = document.getElementById("title")

    const info = document.getElementById("info")
    const mensagen = document.getElementById("mensagen")

    if (name != ""){
        info.textContent = "Calculando..."

        setTimeout(() => {
            if (info){
                main.removeChild(info)
            }

            const KlebVerso = ["Klebsom", "Klebesom", "Klebson", "Klebeson", "Kleberiano", "Kleber", "Klebe", "Klebsu", "Klebesu"]

            if (KlebVerso.includes(name)){
                mensagen.textContent = name + " tem dado em casa !"
                title.textContent = "Essa Pessa É !"
            } else{
                mensagen.textContent = name + " é uma pessoa legal !"
            }
            
        }, 1000);
    }else{
        mensagen.textContent = "Ops! Digite algo válido."
        mensagen.style.color = "Red"
    }

    if (form){
        main.removeChild(form)
    }

    
    setTimeout(() => {
        const NewButtonLocation = document.getElementById("NewButtonLocation")
        const NewButton = document.createElement("button")
        NewButton.textContent = "Recarregar"
        NewButton.addEventListener("click", () => {
            location.reload()
        })
        main.appendChild(NewButton)
    }, 1500);
}