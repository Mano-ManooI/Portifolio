const logo = document.getElementById("logo");
logo.addEventListener("click", () =>{
    open("https://github.com/Mano-ManooI");
});

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
    window.scrollTo({top: 0, behavior: "smooth"})
})