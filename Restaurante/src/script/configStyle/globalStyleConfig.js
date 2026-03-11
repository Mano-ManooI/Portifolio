window.addEventListener("DOMContentLoaded", () =>{
    const buttons = document.querySelectorAll("#selectTypeFoods button");

    buttons.forEach((button) =>{
        const classSelected = "seletctedFood";
        button.addEventListener("click", () =>{
            buttons.forEach((btn) =>{
                btn.classList.remove(classSelected);
            });
            button.classList.add(classSelected);

        });
    });
});