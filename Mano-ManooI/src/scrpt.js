const phoneNumber = "5579998801174";
const buttonFindOutMore = document.getElementById("findOutMore");
buttonFindOutMore.addEventListener("click", () =>{
    const message = encodeURIComponent("Olá! Tudo bem? Gostaria de gostaria de saber mais sobre você!");
    const link = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(link, "_blank");
});
const buttonContact = document.getElementById("buttonContact");
buttonContact.addEventListener("click", () =>{
    const message = encodeURIComponent("Olá! Tudo bem? Gostaria de gostaria de conversar com você sobre: ");
    const link = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(link, "_blank");
});