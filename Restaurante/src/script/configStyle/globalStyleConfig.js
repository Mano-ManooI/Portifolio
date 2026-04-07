const classSelected = "seletctedFood";

function displayFoods() {
    const toBurger = document.getElementById("toBurger");
    const toSide   = document.getElementById("toSide");
    const toDrink  = document.getElementById("toDrink");

    const burgers = document.querySelectorAll("#burger");
    const sides   = document.querySelectorAll("#side");
    const drinks  = document.querySelectorAll("#drink");

    const burgerSelected = toBurger.classList.contains(classSelected);
    const sideSelected   = toSide.classList.contains(classSelected);
    const drinkSelected  = toDrink.classList.contains(classSelected);

    const noneSelected = !burgerSelected && !sideSelected && !drinkSelected;

    const toggle = (elements, visible) =>
        elements.forEach(el => el.classList.toggle("hidden", !visible));

    toggle(burgers, noneSelected || burgerSelected);
    toggle(sides,   noneSelected || sideSelected);
    toggle(drinks,  noneSelected || drinkSelected);
}

window.addEventListener("DOMContentLoaded", () =>{
    const buttons = document.querySelectorAll("#selectTypeFoods button");

    buttons.forEach((button) =>{
        button.addEventListener("click", () =>{
            buttons.forEach((btn) =>{
                btn.classList.remove(classSelected);
            });
            button.classList.add(classSelected);
            displayFoods();
        });
    });
});