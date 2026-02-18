window.addEventListener("scroll", () =>{
    const active = "styleActive";

    const toStart = document.querySelectorAll("#toStart");
    toStart.forEach((e) =>{
        if(window.scrollY > 0){
            e.classList.remove(active);
        }else{
            e.classList.add(active);
        };
    });
    const toAbout = document.querySelectorAll("#toAbout");
    toAbout.forEach((e) =>{
        if(window.scrollY > 0){
            e.classList.remove(active);
        }else{
            e.classList.add(active);
        };
    });
    const toContact = document.querySelectorAll("#toContact");
    toContact.forEach((e) =>{
        if(window.scrollY > 0){
            e.classList.remove(active);
        }else{
            e.classList.add(active);
        };
    });
})