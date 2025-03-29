window.addEventListener("scroll", () =>{
    scrollHeader()
})

function scrollHeader(){
    const header = document.querySelector("header")
    const active = "activeScroll"
    const disactive = "disactiveScroll"

    if(window.scrollY > 125){
        header.classList.add(active)
        header.classList.remove(disactive)
    }else{
        header.classList.add(disactive)
        header.classList.remove(active)
    }
}