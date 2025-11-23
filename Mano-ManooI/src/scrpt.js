const elementToStart = document.getElementById("toStart");
const elementToAbout = document.getElementById("toAbout");
const elementToProjects = document.getElementById("toProjects");
const elementToContact = document.getElementById("toContact");

const textStart = "Início";
const textAbout = "Sobre";
const textProjects = "Projetos";
const textContact = "Contato";
const iconStart = `<i class="fa-solid fa-house"></i>`;
const iconAbout = `<i class="fa-solid fa-circle-info"></i>`;
const iconProjects = `<i class="fa-solid fa-briefcase"></i>`;
const iconContact = `<i class="fa-brands fa-square-whatsapp"></i>`;

window.addEventListener("scroll", () =>{
    if(window.scrollY > 150){
        elementToStart.innerHTML = iconStart;
        elementToAbout.innerHTML = iconAbout;
        elementToProjects.innerHTML = iconProjects;
        elementToContact.innerHTML = iconContact;
    }else{
        elementToStart.innerHTML = textStart;
        elementToAbout.innerHTML = textAbout;
        elementToProjects.innerHTML = textProjects;
        elementToContact.innerHTML = textContact;
    };
});

elementToStart.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: "smooth"});
});

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