const toggleColorButton = document.getElementById("toggleColor");

function toggleColor(){
    const darkMode = "darkMode";
    const lightMode = "lightMode";
    const elementsDark = document.querySelectorAll(".darkMode");
    const elementsLight = document.querySelectorAll(".lightMode");
    elementsDark.forEach((element) =>{
        if(element.classList.contains(darkMode)){
            element.classList.remove(darkMode);
            element.classList.add(lightMode);
        };
    });
    elementsLight.forEach((element) => {
        if (element.classList.contains(lightMode)) {
            element.classList.remove(lightMode);
            element.classList.add(darkMode);
        };
    });

    if(toggleColorButton.innerHTML === `<i class="fa-regular fa-moon"></i>`){
        toggleColorButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }else{
        toggleColorButton.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    };

    const body = document.querySelector("body")
    const imgElement = document.querySelector("main #start img");
    const gradient1 = "./img/gradiente1.png";
    const gradient2 = "./img/gradiente2.png";

    if(body.classList.contains(darkMode)){
        imgElement.src = gradient1;
    }else{
        imgElement.src = gradient2;
    };
};

window.addEventListener("DOMContentLoaded", () =>{
    toggleColorButton.addEventListener("click", () => {
        toggleColor();
    });
});