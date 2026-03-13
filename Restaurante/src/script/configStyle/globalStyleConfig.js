const classSelected = "seletctedFood";

function displayFoods(){
    const toBurger = document.getElementById("toBurger");
    const toSide = document.getElementById("toSide");
    const toDrink = document.getElementById("toDrink");
    const burger = document.querySelectorAll("#burger");
    const side = document.querySelectorAll("#side");
    const drink = document.querySelectorAll("#drink");

    const classHidden = "hidden";

    if(toBurger.classList.contains(classSelected)){
        side.forEach((s) => s.classList.add(classHidden));
        drink.forEach((d) => d.classList.add(classHidden));
    }else{
        side.forEach((s) => s.classList.remove(classHidden));
        drink.forEach((d) => d.classList.remove(classHidden));
    };

    if(toSide.classList.contains(classSelected)){
        burger.forEach((b) => b.classList.add(classHidden));
        drink.forEach((d) => d.classList.add(classHidden));
    }else{
        burger.forEach((b) => b.classList.remove(classHidden));
        drink.forEach((d) => d.classList.remove(classHidden));
    };

    if(toDrink.classList.contains(classSelected)){
        burger.forEach((b) => b.classList.add(classHidden));
        side.forEach((s) => s.classList.add(classHidden));
    }else{
        burger.forEach((b) => b.classList.remove(classHidden));
        side.forEach((s) => s.classList.remove(classHidden));
    };
};

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