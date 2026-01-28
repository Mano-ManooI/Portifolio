const phoneNumber = "5579998801174";
const buttonFindOutMore = document.getElementById("findOutMore");
const buttonContact = document.getElementById("buttonContact");

function closePopUp(){
    const popUp = document.getElementById("popUp");
    popUp.style.display = "none";
};

window.addEventListener("DOMContentLoaded", () =>{
    buttonFindOutMore.addEventListener("click", () =>{
        const message = encodeURIComponent("Olá! Tudo bem? Gostaria de gostaria de saber mais sobre você!");
        const link = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(link, "_blank");
    });
    buttonContact.addEventListener("click", () =>{
        const message = encodeURIComponent("Olá! Tudo bem? Gostaria de gostaria de conversar com você sobre: ");
        const link = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(link, "_blank");
    });

    const buttonClosePopUp = document.getElementById("closePopUp");
    buttonClosePopUp.addEventListener("click", () =>{
        closePopUp();
    });
});