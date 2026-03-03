window.addEventListener("DOMContentLoaded", () =>{
    const logo = document.querySelectorAll('#logo');
    logo.forEach( (button) =>{
        button.addEventListener("click", () => {
            window.scrollTo({top: 0, behavior: "smooth"});
        });
    });
    const startButton = document.getElementById('toStart');
    startButton.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    const menuButton = document.getElementById('toMenu');
    menuButton.addEventListener("click", () => {
        const menuSection = document.getElementById('menu');
        menuSection.scrollIntoView({behavior: "smooth"});
    });
    const aboutButton = document.getElementById('toAbout');
    aboutButton.addEventListener("click", () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({behavior: "smooth"});
    });
    const contactButton = document.getElementById('toContact');
    contactButton.addEventListener("click", () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({behavior: "smooth"});
    });

    const orderButton = document.querySelectorAll('#orderButton');
    orderButton.forEach( (button) =>{
        button.addEventListener("click", () => {
            open("https://whatsapp.com/channel/0029VbCVExOA89Mg8Gx1K73e");
        });
    });

    const gitHubButton = document.getElementById('toGitHub');
    gitHubButton.addEventListener("click", () => {
        open("https://github.com/Mano-ManooI");
    });
});