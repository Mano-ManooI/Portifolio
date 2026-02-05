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
    const imgElement1 = document.querySelectorAll("main #start img.gradient, footer img.gradient");
    const imgElement2 = document.querySelectorAll("footer img.circle");
    const gradient1 = "./img/gradient1.png";
    const gradient2 = "./img/gradient2.png";
    const circle1 = "./img/circle1.png";
    const circle2 = "./img/circle2.png";

    imgElement1.forEach((img) =>{
        if (body.classList.contains(darkMode)) {
            img.src = gradient1;
        } else {
            img.src = gradient2;
        };
    });

    imgElement2.forEach((img) =>{
        if (body.classList.contains(darkMode)) {
            img.src = circle1;
        } else {
            img.src = circle2;
        };
    });
};

window.addEventListener("DOMContentLoaded", () =>{
    toggleColorButton.addEventListener("click", () => {
        toggleColor();
    });
});