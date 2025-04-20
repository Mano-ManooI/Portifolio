addEventListener("DOMContentLoaded", () =>{
    document.getElementById("scrollStart").addEventListener("click", () =>{
        window.scrollTo({top: 0, behavior: "smooth"})
    })

    window.addEventListener("scroll", () =>{
        const header = document.querySelector("header")
        const menu = document.getElementById("menu")

        if(window.scrollY > 555){
            header.style.width = "45%"
            menu.style.position = "absolute"
            menu.style.right = "40px"
        }else{
            header.style.width = "75%"
            menu.style.position = "relative"
            menu.style.right = "0"
        }
    })
})