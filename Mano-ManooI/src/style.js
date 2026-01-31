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
};

window.addEventListener("DOMContentLoaded", () =>{
    toggleColorButton.addEventListener("click", () => {
        toggleColor();
    });
});