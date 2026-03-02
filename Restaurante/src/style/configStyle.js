window.addEventListener("DOMContentLoaded", () =>{
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuButton.addEventListener("click", () => {
        if(mobileMenu.style.display === "flex") {
            mobileMenuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            mobileMenu.style.display = "none";
        }else{
            mobileMenu.style.display = "flex";
            mobileMenu.style.flexDirection = "column";
            mobileMenuButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }
    });
});