function menuMobile() {
    const menu = document.getElementById("menu")
    menu.style.display = "none"
    const menoNone = () =>{
        if(menu){
            menu.style.display = "none"
        }
    }
    const start = document.querySelectorAll(".start")
    start.forEach(iten =>{
        iten.addEventListener("click", (event) =>{
            event.preventDefault()
            menoNone()
        })
    })
    const about = document.querySelectorAll(".about")
    about.forEach(iten =>{
        iten.addEventListener("click", (event) =>{
            event.preventDefault()
            menoNone()
        })
    })
    const works = document.querySelectorAll(".works")
    works.forEach(iten =>{
        iten.addEventListener("click", (event) =>{
            event.preventDefault()
            menoNone()
        })
    })
    const menuButton = document.getElementById("menuButton")
    if(menuButton && menu){
        menuButton.addEventListener("click", (event) =>{
            event.preventDefault()

            if(menu.style.display === "none"){
                menu.style.display = "block"
            }else{
                menu.style.display = "none"
            }
        })
    }

    const menuItens = document.querySelectorAll("#menu ul li")
    if(menuItens.length > 0){
        menuItens.forEach(itens =>{
            itens.addEventListener("click", () =>{
                menu.style.display = "none"
            })
        })
    }
    
}

menuMobile()