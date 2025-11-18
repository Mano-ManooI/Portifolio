const elementStart = document.getElementById("start");
const elementAbout = document.getElementById("about");
const elementCredits = document.getElementById("credits");

const iconStart = elementStart.innerHTML;
const textStart = "Início";
elementStart.innerHTML;
elementStart.addEventListener("mouseover", () =>{
    elementStart.innerText = textStart;
});
elementStart.addEventListener("mouseout", () =>{
    elementStart.innerHTML = iconStart;
});

const iconAbout = elementAbout.innerHTML;
const textAbout = "Sobre";
elementAbout.innerHTML;
elementAbout.addEventListener("mouseover", () =>{
    elementAbout.innerText = textAbout;
});
elementAbout.addEventListener("mouseout", () =>{
    elementAbout.innerHTML = iconAbout;
});

const elementProjects = document.getElementById("projects");
const iconProject = elementProjects.innerHTML;
const textProject = "Projetos";
elementProjects.innerHTML;
elementProjects.addEventListener("mouseover", () =>{
    elementProjects.innerText = textProject;
});
elementProjects.addEventListener("mouseout", () =>{
    elementProjects.innerHTML = iconProject;
});

const iconCredits = elementCredits.innerHTML;
const textCredits = "Creditos";
elementCredits.innerHTML;
elementCredits.addEventListener("mouseover", () =>{
    elementCredits.innerText = textCredits;
});
elementCredits.addEventListener("mouseout", () =>{
    elementCredits.innerHTML = iconCredits;
});