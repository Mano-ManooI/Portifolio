window.addEventListener("DOMContentLoaded", () =>{
    const logo = document.getElementById('logo');
    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        });
    });
    const startButton = document.getElementById('toStart');
    startButton.addEventListener("click", () => {
        const startSection = document.getElementById('start');
        startSection.scrollIntoView({behavior: "smooth"});
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
});