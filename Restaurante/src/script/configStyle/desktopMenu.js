const toStart = document.getElementById("toStart");
const toMenu = document.getElementById("toMenu");
const toContact = document.getElementById("toContact");
const toAbout = document.getElementById("toAbout");

const classActive = "positionActive";
const classInactive = "positionInactive";

window.addEventListener("DOMContentLoaded", () =>{
    window.addEventListener("scroll", () =>{
        if(window.scrollY >= 0 && window.scrollY < 565){
            if(toStart.classList.contains(classInactive)){
                toStart.classList.remove(classInactive);
                toStart.classList.add(classActive);
            }else{
                toStart.classList.add(classActive);
            }
        }else{
            toStart.classList.remove(classActive);
            toStart.classList.add(classInactive);
        }

        if(window.scrollY >= 565){
            if(toMenu.classList.contains(classInactive)){
                toMenu.classList.remove(classInactive);
                toMenu.classList.add(classActive);
            }else{
                toMenu.classList.add(classActive);
            }
        }else{
            toMenu.classList.remove(classActive);
            toMenu.classList.add(classInactive);
        }
    })
})