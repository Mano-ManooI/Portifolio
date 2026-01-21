const header = document.querySelector("header");

const elementToStart = document.getElementById("toStart");
const elementToAbout = document.getElementById("toAbout");
const elementToContact = document.getElementById("toContact");

const textStart = "Início";
const textAbout = "Sobre";
const textContact = "Contato";
const iconStart = `<i class="fa-solid fa-house"></i>`;
const iconAbout = `<i class="fa-solid fa-circle-info"></i>`;
const iconContact = `<i class="fa-brands fa-whatsapp"></i>`;

window.addEventListener("scroll", () =>{
    if(window.scrollY > 150){
        header.style.width = "25%";
        header.style.background = "#f9f9f9";
        elementToStart.innerHTML = iconStart;
        elementToAbout.innerHTML = iconAbout;
        elementToContact.innerHTML = iconContact;
    }else{
        header.style.width = "75%";
        header.style.background = "rgb(235, 235, 255)";
        elementToStart.innerHTML = textStart;
        elementToAbout.innerHTML = textAbout;
        elementToContact.innerHTML = textContact;
    };
});

elementToStart.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: "smooth"});
});
elementToAbout.addEventListener("click", () =>{
    window.scrollTo({top: 460, behavior: "smooth"});
});
elementToContact.addEventListener("click", () =>{
    window.scrollTo({top: 710, behavior: "smooth"});
});