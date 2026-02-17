const logo = document.getElementById("logo");
window.addEventListener("DOMContentLoaded", () =>{
    logo.addEventListener("click", () =>{
        window.scrollTo({top: 0, behavior: "smooth"})
    });
});