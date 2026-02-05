const toStart = document.getElementById("toStart");
const toAbout = document.getElementById("toAbout");
const toContact = document.getElementById("toContact");
const toThanks = document.getElementById("toThanks");

window.addEventListener("DOMContentLoaded", () =>{
    toStart.addEventListener("click", () =>{
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    toAbout.addEventListener("click", () =>{
        window.scrollTo({top: 500, behavior: "smooth"});
    });
    toContact.addEventListener("click", () =>{
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    toThanks.addEventListener("click", () =>{
        window.scrollTo({top: 860, behavior: "smooth"});
    });

    const toTalkButton = document.querySelectorAll("#toTalk");
    toTalkButton.forEach((toTalk) =>{
        toTalk.addEventListener("click", () => {
            const phoneNumber = "5579998801174";
            const message = encodeURIComponent("Olá! Tudo bem? Gostaria de conversar com você sobre: ");
            const ulr = `https://wa.me/${phoneNumber}?text=${message}`;
            open(ulr);
        });
    });

    const atLinkedinButton = document.querySelectorAll("#atLinkedin");
    atLinkedinButton.forEach((atLinkedin) =>{
        atLinkedin.addEventListener("click", () =>[
            open("https://www.linkedin.com/in/manoel-neto-279231262/"),
        ]);
    });

    const atGithubButton = document.querySelectorAll("#atGithub");
    atGithubButton.forEach((atGitHub) =>{
        atGitHub.addEventListener("click", () =>[
            open("https://github.com/Mano-ManooI"),
        ]);
    });
});