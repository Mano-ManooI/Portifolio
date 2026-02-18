const toStart = document.querySelectorAll("#toStart");
window.addEventListener("DOMContentLoaded", () =>{
    toStart.forEach((e) =>{
        e.addEventListener("click", () =>{
            window.scrollTo({top: 0, behavior: "smooth"})
        });
    });
});