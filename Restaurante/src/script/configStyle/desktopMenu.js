const toStart = document.getElementById("toStart");
const toMenu = document.getElementById("toMenu");
const toContact = document.getElementById("toContact");
const toAbout = document.getElementById("toAbout");

const classActive = "positionActive";
const classInactive = "positionInactive";

function styleMenu(){
    const elementMenu = document.querySelector("#desktopMenu ul li button");
    if(elementMenu.classList.contains(classActive)){
        elementMenu.style.color = "#FF5F00"
    }
};

styleMenu();

window.addEventListener("DOMContentLoaded", () =>{
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 0){
            toStart.classList.remove(classActive);
            toStart.classList.add(classInactive);
        }
    })
})